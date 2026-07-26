export const BREAKPOINTS = {
    mobile: 320,
    tablet: 768,
    laptop: 1024,
    desktop: 1440,
} as const;

export const MEDIA_QUERIES = {
    mobile: `(min-width: ${BREAKPOINTS.mobile}px)`,
    tablet: `(min-width: ${BREAKPOINTS.tablet}px)`,
    laptop: `(min-width: ${BREAKPOINTS.laptop}px)`,
    desktop: `(min-width: ${BREAKPOINTS.desktop}px)`,
    mobileOnly: `(max-width: ${BREAKPOINTS.tablet - 1}px)`,
    touch: `(hover: none) and (pointer: coarse)`,
    retina: `(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)`,
    safari: `not all and (min-resolution:.001dpcm)`,
} as const;
