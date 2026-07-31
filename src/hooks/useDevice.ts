'use client';

import { useSyncExternalStore } from 'react';

type TDevice = 'mobile' | 'tablet' | 'laptop' | 'desktop';

const QUERIES: Record<TDevice, string> = {
    mobile: '(max-width: 767px)',
    tablet: '(min-width: 768px) and (max-width: 1023px)',
    laptop: '(min-width: 1024px) and (max-width: 1439px)',
    desktop: '(min-width: 1440px)',
};

function getDevice(): TDevice {
    for (const [device, query] of Object.entries(QUERIES)) {
        if (window.matchMedia(query).matches) return device as TDevice;
    }
    return 'desktop';
}

function subscribe(callback: () => void): () => void {
    const cleanups = Object.values(QUERIES).map((query) => {
        const media = window.matchMedia(query);
        media.addEventListener('change', callback);
        return () => media.removeEventListener('change', callback);
    });

    return () => cleanups.forEach((fn) => fn());
}

function getSnapshot(): TDevice {
    return getDevice();
}

function getServerSnapshot(): TDevice {
    return 'desktop';
}

export function useDevice(): TDevice {
    return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function useIsMobile(): boolean {
    const device = useDevice();
    return device === 'mobile';
}

export function useIsTablet(): boolean {
    const device = useDevice();
    return device === 'tablet' || device === 'mobile';
}
