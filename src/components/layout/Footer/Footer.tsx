import { type FC } from 'react';
import { cn } from '@/utils/cn';
import { Container } from '@/components/ui';
import { FooterNav } from './FooterNav/FooterNav';
import { FooterSocials } from './FooterSocials/FooterSocials';
import type { TFooterProps } from './Footer.types';
import styles from './Footer.module.scss';

const Footer: FC<TFooterProps> = ({ className }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={cn(styles.footer, className)}>
            <Container className={styles.footerInner}>
                <div className={styles.footerTop}>
                    <FooterNav />
                    <FooterSocials />
                </div>

                <div className={styles.footerBottom}>
                    <p className={styles.copyright}>
                        &copy; {currentYear} Сегмент. Все права защищены.
                    </p>
                </div>
            </Container>
        </footer>
    );
};

Footer.displayName = 'Footer';

export { Footer };
