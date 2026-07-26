import type { Metadata } from 'next';
import '@/styles/globals.scss';
import { Header } from '@/components/layout/Header/Header';
import { Footer } from '@/components/layout/Footer/Footer';
import { Preloader } from '@/components/ui';
import styles from './layout.module.scss';
import { assetPath } from '@/utils/assetPath';

export const metadata: Metadata = {
    title: 'Pet Project',
    description: 'Переработка бумажных отходов и утилизация мукулатуры',
    icons: {
        icon: assetPath('/images/common/favicon.svg'),
        shortcut: assetPath('/images/common/favicon.ico'),
        apple: assetPath('/images/common/apple-touch-icon.png'),
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
