import { type FC } from 'react';
import Link from 'next/link';
import { cn } from '@/utils/cn';
import { Icon } from '@/components/ui';
import { FOOTER_SOCIAL_LINKS } from '@/data/footer';
import type { THeaderSocialsProps } from './HeaderSocials.types';
import styles from './HeaderSocials.module.scss';

const HeaderSocials: FC<THeaderSocialsProps> = ({ items = FOOTER_SOCIAL_LINKS, className }) => {
    return (
        <div className={cn(styles.socials, className)}>
            {items.map(({ id, label, href, icon }) => (
                <Link
                    key={id}
                    href={href}
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                >
                    <Icon
                        name={icon as 'telegram' | 'whatsapp' | 'email'}
                        size={20}
                        className={styles.icon}
                    />
                </Link>
            ))}
        </div>
    );
};

HeaderSocials.displayName = 'HeaderSocials';

export { HeaderSocials };
