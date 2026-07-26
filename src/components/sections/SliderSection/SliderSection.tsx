'use client';

import { type FC, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { cn } from '@/utils/cn';
import { Container } from '@/components/ui';
import { useActiveSlide } from '@/hooks/useActiveSlide';
import type { TSliderSectionProps } from './SliderSection.types';
import styles from './SliderSection.module.scss';

const SliderSection: FC<TSliderSectionProps> = ({ slides, autoPlayInterval = 5000, className }) => {
    const { activeIndex, containerRef, goToSlide } = useActiveSlide(slides.length);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const userInteracted = useRef(false);

    const startAutoPlay = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        intervalRef.current = setInterval(() => {
            if (userInteracted.current) return;

            const next = (activeIndex + 1) % slides.length;
            goToSlide(next);
        }, autoPlayInterval);
    }, [autoPlayInterval, slides.length, activeIndex, goToSlide]);

    useEffect(() => {
        startAutoPlay();

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [startAutoPlay]);

    const handleDotClick = (index: number) => {
        userInteracted.current = true;
        goToSlide(index);

        setTimeout(() => {
            userInteracted.current = false;
        }, 5000);
    };

    return (
        <div className={cn(styles.slider, className)}>
            <div
                className={styles.track}
                ref={containerRef}
                style={{
                    scrollPaddingTop: 'var(--header-height, 6rem)',
                }}
            >
                {slides.map((slide, index) => (
                    <div key={slide.id} className={styles.slide} data-slide-index={index}>
                        <Image
                            src={slide.image}
                            alt={slide.imageAlt}
                            fill
                            className={styles.image}
                            priority={index === 0}
                            sizes="100vw"
                        />
                        <div className={styles.overlay} />

                        <Container className={styles.content}>
                            <h2 className={styles.title}>{slide.title}</h2>
                            {slide.subtitle && <p className={styles.subtitle}>{slide.subtitle}</p>}
                        </Container>
                    </div>
                ))}
            </div>

            <div className={styles.dots}>
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={cn(styles.dot, { [styles.dotActive]: index === activeIndex })}
                        onClick={() => handleDotClick(index)}
                        aria-label={`Перейти к слайду ${index + 1}`}
                        type="button"
                    />
                ))}
            </div>
        </div>
    );
};

SliderSection.displayName = 'SliderSection';

export { SliderSection };
