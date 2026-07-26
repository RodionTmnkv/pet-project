import React, { forwardRef, type ForwardedRef } from 'react';
import { cn } from '@/utils/cn';
import type { TTypographyProps } from './Typography.types';
import styles from './Typography.module.scss';

const VARIANT_TO_TAG: Record<string, React.ElementType> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    body: 'p',
    'body-sm': 'p',
    caption: 'span',
};

const Typography = forwardRef<HTMLElement, TTypographyProps>(
    ({ children, variant = 'body', as, className, ...rest }, ref: ForwardedRef<HTMLElement>) => {
        const Tag: React.ElementType = as || VARIANT_TO_TAG[variant] || 'p';

        return (
            <Tag ref={ref} className={cn(styles.typography, styles[variant], className)} {...rest}>
                {children}
            </Tag>
        );
    },
);

Typography.displayName = 'Typography';

export { Typography };
