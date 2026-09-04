'use client';

import { type FC, useEffect, useState } from 'react';
import { cn } from '@/utils/cn';
import type { TCookieConsentProps } from './CookieConsent.types';
import styles from './CookieConsent.module.scss';

const STORAGE_KEY = 'cookie-consent';
const ACCEPT_DURATION = 365;
const DECLINE_DURATION = 7;

const CookieConsent: FC<TCookieConsentProps> = ({ className }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHiding, setIsHiding] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);

        if (saved) {
            const { status, timestamp } = JSON.parse(saved);
            const now = Date.now();
            const durationDays = status === 'accepted' ? ACCEPT_DURATION : DECLINE_DURATION;
            const durationMs = durationDays * 24 * 60 * 60 * 1000;

            if (now - timestamp < durationMs) {
                return;
            }
        }

        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 3500);

        return () => clearTimeout(timer);
    }, []);

    const handleAction = (status: 'accepted' | 'declined') => {
        const data = {
            status,
            timestamp: Date.now(),
        };

        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        setIsHiding(true);

        setTimeout(() => {
            setIsVisible(false);
        }, 500);
    };

    if (!isVisible) return null;

    return (
        <div className={cn(styles.overlay, { [styles.overlayHidden]: isHiding }, className)}>
            <div className={styles.content}>
                <p className={styles.text}>
                    Мы используем cookie-файлы для улучшения работы сайта. Оставаясь на сайте, вы
                    соглашаетесь с{' '}
                    <a href="/privacy" className={styles.link}>
                        политикой конфиденциальности
                    </a>
                    .
                </p>

                <div className={styles.actions}>
                    <button
                        className={cn(styles.actionButton, styles.acceptButton)}
                        onClick={() => handleAction('accepted')}
                        type="button"
                    >
                        Принять
                    </button>
                    <button
                        className={cn(styles.actionButton, styles.declineButton)}
                        onClick={() => handleAction('declined')}
                        type="button"
                    >
                        Отклонить
                    </button>
                </div>
            </div>
        </div>
    );
};

CookieConsent.displayName = 'CookieConsent';

export { CookieConsent };
