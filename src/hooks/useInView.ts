'use client';

import { useEffect, useRef, useState, type RefObject } from 'react';

export function useInView(threshold = 0.3): {
    ref: RefObject<HTMLDivElement | null>;
    isInView: boolean;
} {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold },
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [threshold]);

    return { ref, isInView };
}
