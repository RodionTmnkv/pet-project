'use client';

import { useEffect } from 'react';

export function useScrollLock(isLocked: boolean): void {
    useEffect(() => {
        if (!isLocked) return;

        const originalOverflow = document.body.style.overflow;
        const originalPadding = document.body.style.paddingRight;
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

        document.body.style.overflow = 'hidden';
        if (scrollbarWidth > 0) {
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        }

        return () => {
            document.body.style.overflow = originalOverflow;
            document.body.style.paddingRight = originalPadding;
        };
    }, [isLocked]);
}
