import { type FC } from 'react';
import Link from 'next/link';
import { cn } from '@/utils/cn';
import { Icon } from '@/components/ui';
import type { TButtonProps } from './Button.types';
import styles from './Button.module.scss';

const Button: FC<TButtonProps> = ({
    children,
    href,
    variant = 'primary',
    size = 'md',
    className,
    ...rest
}) => {
    const isExternal = href.startsWith('http') || href.startsWith('mailto');

    const linkProps = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};

    return (
        <Link
            href={href}
            className={cn(styles.button, styles[variant], styles[size], className)}
            {...linkProps}
            {...rest}
        >
            <span className={styles.text}>{children}</span>
            <span className={styles.iconWrapper}>
                <Icon name="arrow-right" size={16} className={styles.icon} />
            </span>
        </Link>
    );
};

Button.displayName = 'Button';

export { Button };
