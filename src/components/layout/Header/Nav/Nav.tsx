'use client';

import { type FC, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils/cn';
import { useFocusTrap } from '@/hooks';
import { FOOTER_NAV_ITEMS } from '@/data/footer';
import { FOOTER_SOCIAL_LINKS } from '@/data/footer';
import { Icon, PandaLogo } from '@/components/ui';
import type { TNavProps } from './Nav.types';
import styles from './Nav.module.scss';

const NAV_ITEMS = FOOTER_NAV_ITEMS;

const Nav: FC<TNavProps> = ({ items = NAV_ITEMS, isOpen, onClose, className }) => {
    const pathname = usePathname();
    const focusTrapRef = useFocusTrap(isOpen);

    useEffect(() => {
        onClose();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    return (
        <>
            <div
                className={cn(styles.overlay, { [styles.overlayVisible]: isOpen })}
                onClick={onClose}
                aria-hidden="true"
            />

            <nav
                ref={focusTrapRef}
                className={cn(styles.nav, { [styles.navOpen]: isOpen }, className)}
                aria-label="Основная навигация"
                aria-hidden={!isOpen}
            >
                <div className={styles.navTop}>
                    <PandaLogo width={64} height={64} className={styles.panda} />

                    <h3 className={styles.navTitle}>Меню</h3>
                    <ul className={styles.navList}>
                        {items.map((item) => {
                            const isActive = pathname === item.href;

                            return (
                                <li key={item.id}>
                                    <Link
                                        href={item.href}
                                        className={cn(styles.navLink, {
                                            [styles.navLinkActive]: isActive,
                                        })}
                                        {...(item.isExternal
                                            ? { target: '_blank', rel: 'noopener noreferrer' }
                                            : {})}
                                        tabIndex={isOpen ? 0 : -1}
                                        prefetch={false}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className={styles.navBottom}>
                    <h3 className={styles.navTitle}>Свяжитесь с нами</h3>
                    <ul className={styles.navSocialList}>
                        {FOOTER_SOCIAL_LINKS.map(({ id, label, href, icon }) => (
                            <li key={id} className={styles.navSocialItem}>
                                <Link
                                    href={href}
                                    className={styles.navSocialBurgerLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    tabIndex={isOpen ? 0 : -1}
                                >
                                    <Icon name={icon} size={20} className={styles.navSocialIcon} />
                                    <span className={styles.navSocialLabel}>{label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
};

Nav.displayName = 'Nav';

export { Nav };
