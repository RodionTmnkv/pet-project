import type { Metadata } from 'next';
import { Section } from '@/components/ui';
import styles from './page.module.scss';

export const metadata: Metadata = {
    title: 'Контакты',
    description: 'Свяжитесь с нами удобным способом',
};

export default function ContactsPage() {
    return (
        <Section>
            <h1 className={styles.title}>Контакты</h1>
            <p className={styles.text}>Свяжитесь с нами любым удобным способом.</p>
        </Section>
    );
}
