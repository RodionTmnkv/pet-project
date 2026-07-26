import { forwardRef, type ForwardedRef } from 'react';
import { cn } from '@/utils/cn';
import type { TContainerProps } from './Container.types';
import styles from './Container.module.scss';

const Container = forwardRef<HTMLDivElement, TContainerProps>(
    ({ children, as: Tag = 'div', className, ...rest }, ref: ForwardedRef<HTMLDivElement>) => {
        return (
            <Tag ref={ref} className={cn(styles.container, className)} {...rest}>
                {children}
            </Tag>
        );
    },
);

Container.displayName = 'Container';

export { Container };
