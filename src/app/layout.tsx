import type { Metadata } from 'next';
import '@/styles/globals.scss';
import { Header } from '@/components/layout/Header/Header';
import { Footer } from '@/components/layout/Footer/Footer';
import { Preloader } from '@/components/ui';
import styles from './layout.module.scss';

export const metadata: Metadata = {
    title: 'Pet Project',
    description: 'Переработка бумажных отходов и утилизация мукулатуры',
    icons: {
        icon: '/images/common/favicon.svg',
        shortcut: '/images/common/favicon.ico',
        apple: '/images/common/apple-touch-icon.png',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body className={styles.body}>
                <Preloader />
                <Header />
                <main className={styles.main}>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
