import type { Metadata } from 'next';
import { Section } from '@/components/ui';
import styles from './page.module.scss';

export const metadata: Metadata = {
    title: 'Портфолио',
    description: 'Наши работы и проекты',
};

export default function PortfolioPage() {
    return (
        <Section>
            <h1 className={styles.title}>Портфолио</h1>
            <p className={styles.text}>Здесь будут представлены наши лучшие проекты.</p>
        </Section>
    );
}
