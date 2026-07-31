'use client';

import { type FC, useEffect, useState, useCallback, useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/utils/cn';
import { assetPath } from '@/utils/assetPath';
import { Icon } from '@/components/ui';
import { useLockedBody } from '@/hooks';
import type { TProductGalleryProps } from './ProductGallery.types';
import styles from './ProductGallery.module.scss';

const SWIPE_THRESHOLD = 50;

const ProductGallery: FC<TProductGalleryProps> = ({ product, isOpen, onClose, className }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [wasOpen, setWasOpen] = useState(false);
    const { lock, unlock } = useLockedBody();
    const touchStartX = useRef(0);
    const touchStartY = useRef(0);

    const images = [product.image, ...product.gallery];

    const goTo = useCallback((index: number) => {
        setActiveIndex(index);
    }, []);

    // Сброс индекса при открытии
    if (isOpen && !wasOpen) {
        setWasOpen(true);
        if (activeIndex !== 0) {
            setActiveIndex(0);
        }
    } else if (!isOpen && wasOpen) {
        setWasOpen(false);
    }

    useEffect(() => {
        if (isOpen) {
            lock();
        } else {
            unlock();
        }
    }, [isOpen, lock, unlock]);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            } else if (e.key === 'ArrowLeft') {
                goTo(activeIndex > 0 ? activeIndex - 1 : images.length - 1);
            } else if (e.key === 'ArrowRight') {
                goTo(activeIndex < images.length - 1 ? activeIndex + 1 : 0);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, activeIndex, images.length, onClose, goTo]);

    // Touch-события для свайпов
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
        touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        const deltaX = e.changedTouches[0].clientX - touchStartX.current;
        const deltaY = e.changedTouches[0].clientY - touchStartY.current;

        // Свайп должен быть горизонтальным (горизонтальное смещение больше вертикального)
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > SWIPE_THRESHOLD) {
            if (deltaX > 0) {
                // Свайп вправо — предыдущий слайд
                goTo(activeIndex > 0 ? activeIndex - 1 : images.length - 1);
            } else {
                // Свайп влево — следующий слайд
                goTo(activeIndex < images.length - 1 ? activeIndex + 1 : 0);
            }
        }
    };

    if (!isOpen) return null;

    return (
        <div className={cn(styles.overlay, className)} onClick={onClose}>
            <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                <button
                    className={styles.closeButton}
                    onClick={onClose}
                    aria-label="Закрыть галерею"
                    type="button"
                >
                    <Icon name="close" size={24} />
                </button>

                <div className={styles.header}>
                    <h3 className={styles.title}>{product.title}</h3>
                    <p className={styles.counter}>
                        {activeIndex + 1} / {images.length}
                    </p>
                </div>

                <div
                    className={styles.carousel}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <div className={styles.track}>
                        {images.map((img, index) => (
                            <div
                                key={img}
                                className={cn(styles.slide, {
                                    [styles.slideActive]: index === activeIndex,
                                    [styles.slidePrev]:
                                        index ===
                                        (activeIndex === 0 ? images.length - 1 : activeIndex - 1),
                                    [styles.slideNext]:
                                        index ===
                                        (activeIndex === images.length - 1 ? 0 : activeIndex + 1),
                                })}
                                onClick={() => goTo(index)}
                                role="button"
                                tabIndex={0}
                                aria-label={`Изображение ${index + 1}`}
                            >
                                <Image
                                    src={assetPath(img)}
                                    alt=""
                                    fill
                                    sizes="(max-width: 768px) 80vw, 60vw"
                                    className={styles.image}
                                    priority={index === activeIndex}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {images.length > 1 && (
                    <div className={styles.thumbs}>
                        {images.map((img, index) => (
                            <button
                                key={img}
                                className={cn(styles.thumb, {
                                    [styles.thumbActive]: index === activeIndex,
                                })}
                                onClick={() => goTo(index)}
                                aria-label={`Изображение ${index + 1}`}
                                type="button"
                            >
                                <Image
                                    src={assetPath(img)}
                                    alt=""
                                    width={80}
                                    height={60}
                                    className={styles.thumbImage}
                                />
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

ProductGallery.displayName = 'ProductGallery';

export { ProductGallery };
