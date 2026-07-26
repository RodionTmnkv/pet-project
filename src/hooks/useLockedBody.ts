'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { useScrollLock } from './useScrollLock';

type TUseLockedBodyReturn = {
    isLocked: boolean;
    toggle: () => void;
    lock: () => void;
    unlock: () => void;
};

export function useLockedBody(): TUseLockedBodyReturn {
    const [isLocked, setIsLocked] = useState(false);
    const isHydrated = useRef(false);

    useEffect(() => {
        isHydrated.current = true;
    }, []);

    useScrollLock(isLocked);

    useEffect(() => {
        if (!isLocked || !isHydrated.current) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsLocked(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isLocked]);

    const toggle = useCallback(() => {
        if (!isHydrated.current) return;
        setIsLocked((prev) => !prev);
    }, []);

    const lock = useCallback(() => {
        if (!isHydrated.current) return;
        setIsLocked(true);
    }, []);

    const unlock = useCallback(() => {
        if (!isHydrated.current) return;
        setIsLocked(false);
    }, []);

    return { isLocked, toggle, lock, unlock };
}
