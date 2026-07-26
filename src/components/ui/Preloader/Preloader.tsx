'use client';

import { type FC, useEffect, useState, useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/utils/cn';
import type { TPreloaderProps } from './Preloader.types';
import styles from './Preloader.module.scss';

const STORAGE_KEY = 'preloader-shown';

const Preloader: FC<TPreloaderProps> = ({
    logoSrc = '/images/common/panda-logo.svg',
    minDuration = 3000,
}) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isHiding, setIsHiding] = useState(false);
    const startTimeRef = useRef<number>(0);

    // Проверяем флаг синхронно, до первого рендера на клиенте
    useLayoutEffect(() => {
        const alreadyShown = sessionStorage.getItem(STORAGE_KEY);
        if (alreadyShown) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsVisible(false);
        }
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        startTimeRef.current = Date.now();

        const hide = () => {
            const elapsed = Date.now() - startTimeRef.current;
            const remaining = Math.max(0, minDuration - elapsed);

            const timer1 = setTimeout(() => {
                setIsHiding(true);

                const timer2 = setTimeout(() => {
                    setIsVisible(false);
                    sessionStorage.setItem(STORAGE_KEY, 'true');
                }, 500);

                return () => clearTimeout(timer2);
            }, remaining);

            return () => clearTimeout(timer1);
        };

        let cleanup: (() => void) | undefined;

        if (document.readyState === 'complete') {
            cleanup = hide();
        } else {
            const handler = () => {
                cleanup = hide();
            };
            window.addEventListener('load', handler, { once: true });
            return () => {
                window.removeEventListener('load', handler);
                if (cleanup) cleanup();
            };
        }
    }, [isVisible, minDuration]);

    if (!isVisible) return null;

    return (
        <div className={cn(styles.overlay, { [styles.overlayHidden]: isHiding })}>
            <div className={styles.container}>
                <svg className={styles.ring} viewBox="0 0 120 120">
                    <circle
                        cx="60"
                        cy="60"
                        r="54"
                        fill="none"
                        stroke="rgba(255, 255, 255, 0.15)"
                        strokeWidth="3"
                    />
                    <circle
                        cx="60"
                        cy="60"
                        r="54"
                        fill="none"
                        stroke="#b1e02d"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray="339.292"
                        strokeDashoffset="339.292"
                        className={styles.ringProgress}
                        transform="rotate(-90 60 60)"
                    />
                </svg>

                <div className={styles.logoWrapper}>
                    <Image
                        src={logoSrc}
                        alt="Загрузка"
                        width={64}
                        height={64}
                        className={styles.logo}
                        priority
                    />
                </div>

                <p className={styles.text}>Загрузка...</p>
            </div>
        </div>
    );
};

Preloader.displayName = 'Preloader';

export { Preloader };
