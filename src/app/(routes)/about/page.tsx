import type { Metadata } from 'next';
import { Section } from '@/components/ui';
import styles from './page.module.scss';

export const metadata: Metadata = {
    title: 'О нас',
    description: 'Узнайте больше о нашей компании',
};

export default function AboutPage() {
    return (
        <Section>
            <h1 className={styles.title}>О нас</h1>
            <p className={styles.text}>Здесь будет информация о компании.</p>
        </Section>
    );
}
