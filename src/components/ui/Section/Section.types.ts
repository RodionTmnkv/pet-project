import { type HTMLAttributes, type ReactNode } from 'react';

export type TSectionProps = HTMLAttributes<HTMLElement> & {
    children: ReactNode;
    as?: 'section' | 'div' | 'article';
    className?: string;
    topPadding?: 'sm' | 'md' | 'lg' | 'none';
    bottomPadding?: 'sm' | 'md' | 'lg' | 'none';
};
