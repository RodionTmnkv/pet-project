import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import '@/styles/globals.scss';
import { Header } from '@/components/layout/Header/Header';
import { Footer } from '@/components/layout/Footer/Footer';
import { Preloader, CookieConsent } from '@/components/ui';
import styles from './layout.module.scss';

const nunito = Nunito({
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
    variable: '--font-nunito',
    weight: ['400', '500', '600', '700'],
});

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
        <html lang="ru" className={nunito.variable}>
            <body className={styles.body}>
                <Preloader />
                <Header />
                <main className={styles.main}>{children}</main>
                <Footer />
                <CookieConsent />
            </body>
        </html>
    );
}
