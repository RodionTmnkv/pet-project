'use client';

import { useState, useEffect, useRef, type RefObject } from 'react';

type TUseActiveSlideReturn = {
    activeIndex: number;
    containerRef: RefObject<HTMLDivElement | null>;
    goToSlide: (index: number) => void;
};

export function useActiveSlide(slideCount: number): TUseActiveSlideReturn {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const isScrolling = useRef(false);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (isScrolling.current) return;

                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.getAttribute('data-slide-index'));
                        if (!isNaN(index)) {
                            setActiveIndex(index);
                        }
                    }
                });
            },
            {
                root: container,
                threshold: 0.6,
            },
        );

        const slides = container.querySelectorAll('[data-slide-index]');
        slides.forEach((slide) => observer.observe(slide));

        return () => observer.disconnect();
    }, [slideCount]);

    const goToSlide = (index: number) => {
        const container = containerRef.current;
        if (!container) return;

        isScrolling.current = true;
        setActiveIndex(index);

        const slide = container.querySelector(
            `[data-slide-index="${index}"]`,
        ) as HTMLElement | null;

        if (slide) {
            const scrollLeft = slide.offsetLeft;
            container.scrollTo({
                left: scrollLeft,
                behavior: 'smooth',
            });
        }

        setTimeout(() => {
            isScrolling.current = false;
        }, 600);
    };

    return { activeIndex, containerRef, goToSlide };
}
