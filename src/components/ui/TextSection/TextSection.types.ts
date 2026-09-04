import { type ReactNode } from 'react';

export type TTextSectionProps = {
    children: ReactNode;
    heading?: string;
    align?: 'left' | 'center';
    className?: string;
    headingClassName?: string;
};
