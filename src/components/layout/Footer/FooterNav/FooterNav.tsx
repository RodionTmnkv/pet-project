import { type FC } from 'react';
import Link from 'next/link';
import { cn } from '@/utils/cn';
import { FOOTER_NAV_ITEMS } from '@/data/footer';
import type { TFooterNavProps } from './FooterNav.types';
import styles from './FooterNav.module.scss';

const FooterNav: FC<TFooterNavProps> = ({ items = FOOTER_NAV_ITEMS, className }) => {
    return (
        <nav className={cn(className)} aria-label="Навигация в подвале">
            <h3 className={styles.title}>Навигация</h3>
            <ul className={styles.list}>
                {items.map(({ id, label, href, isExternal }) => (
                    <li key={id}>
                        <Link
                            href={href}
                            prefetch={false}
                            className={styles.link}
                            {...(isExternal
                                ? { target: '_blank', rel: 'noopener noreferrer' }
                                : {})}
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

FooterNav.displayName = 'FooterNav';

export { FooterNav };
