import { type FC } from 'react';
import Link from 'next/link';
import { cn } from '@/utils/cn';
import { Icon } from '@/components/ui';
import { FOOTER_SOCIAL_LINKS } from '@/data/footer';
import type { TFooterSocialsProps } from './FooterSocials.types';
import styles from './FooterSocials.module.scss';

const FooterSocials: FC<TFooterSocialsProps> = ({ items = FOOTER_SOCIAL_LINKS, className }) => {
    return (
        <div className={cn(styles.socials, className)}>
            <h3 className={styles.title}>Свяжитесь с нами</h3>
            <ul className={styles.list}>
                {items.map(({ id, label, href, icon }) => (
                    <li key={id}>
                        <Link
                            href={href}
                            className={styles.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                        >
                            <Icon name={icon} size={20} className={styles.icon} />
                            <span>{label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

FooterSocials.displayName = 'FooterSocials';

export { FooterSocials };
