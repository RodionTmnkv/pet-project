'use client';

import { useEffect, useState } from 'react';

export function useCountUp(target: number, isActive: boolean, duration = 2000): number {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isActive) return;

        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            setCount(Math.floor(eased * target));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [target, isActive, duration]);

    return count;
}
