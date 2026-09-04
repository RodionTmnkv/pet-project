'use client';

import { type FC } from 'react';
import Link from 'next/link';
import { cn } from '@/utils/cn';
import { Container, Logo, Icon } from '@/components/ui';
import { Nav } from './Nav/Nav';
import { BurgerButton } from './BurgerButton/BurgerButton';
import { useLockedBody } from '@/hooks';
import { FOOTER_SOCIAL_LINKS } from '@/data/footer';
import type { THeaderProps } from './Header.types';
import styles from './Header.module.scss';

const Header: FC<THeaderProps> = ({ className }) => {
    const { isLocked: isMenuOpen, toggle, unlock } = useLockedBody();

    return (
        <header className={cn(styles.header, className)}>
            <Container className={styles.headerInner}>
                <Logo className={styles.logo} />

                <Nav isOpen={isMenuOpen} onClose={unlock} />

                <div className={styles.socials}>
                    {FOOTER_SOCIAL_LINKS.map(({ id, label, href, icon }) => (
                        <Link
                            key={id}
                            href={href}
                            className={styles.socialLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                        >
                            <Icon name={icon} size={20} className={styles.socialIcon} />
                        </Link>
                    ))}
                </div>

                <BurgerButton isOpen={isMenuOpen} onClick={toggle} />
            </Container>
        </header>
    );
};

Header.displayName = 'Header';

export { Header };
