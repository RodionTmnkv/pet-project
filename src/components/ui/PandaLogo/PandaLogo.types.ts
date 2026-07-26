import { type HTMLAttributes } from 'react';

export type TPandaLogoProps = HTMLAttributes<HTMLDivElement> & {
    width?: number;
    height?: number;
    color?: string;
    hoverColor?: string;
    opacity?: number;
    className?: string;
};
