import { type AnchorHTMLAttributes } from 'react';

export type TButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: string;
    href: string;
    variant?: 'primary' | 'gradient';
    size?: 'md' | 'lg';
    className?: string;
};
