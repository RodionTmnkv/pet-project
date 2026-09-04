import type { Metadata } from 'next';
import { Section } from '@/components/ui';
import styles from './page.module.scss';
import { FaqSection } from '@/components/sections/FaqSection/FaqSection';

export const metadata: Metadata = {
    title: 'Услуги',
    description: 'Наши услуги и направления работы',
};

export default function ServicesPage() {
    return (
        <>
            <Section>
                <h1 className={styles.title}>Услуги</h1>
                <p className={styles.text}>
                    Мы предлагаем широкий спектр услуг в сфере разработки.
                </p>
            </Section>
            <FaqSection />
        </>
    );
}
