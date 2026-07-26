import { type HTMLAttributes, type ReactNode } from 'react';

export type TContainerProps = HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;
    as?: 'div' | 'section' | 'header' | 'footer' | 'nav';
    className?: string;
};
