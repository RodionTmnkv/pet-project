import { type FC } from 'react';
import Link from 'next/link';
import { cn } from '@/utils/cn';
import type { TLogoProps } from './Logo.types';
import styles from './Logo.module.scss';

const Logo: FC<TLogoProps> = ({ className, ...rest }) => {
    return (
        <Link href="/" className={cn(styles.logo, className)} {...rest} aria-label="На главную">
            <span className={styles.logoAccent}>Сег</span>
            <span>мент</span>
        </Link>
    );
};

Logo.displayName = 'Logo';

export { Logo };
