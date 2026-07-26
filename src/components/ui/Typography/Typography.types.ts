import { type HTMLAttributes, type ReactNode } from 'react';

type TTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
type TVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'body' | 'body-sm' | 'caption';

export type TTypographyProps = HTMLAttributes<HTMLElement> & {
    children: ReactNode;
    variant?: TVariant;
    as?: TTag;
    className?: string;
};
