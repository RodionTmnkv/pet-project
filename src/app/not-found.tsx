import Link from 'next/link';
import type { Metadata } from 'next';
import styles from './not-found.module.scss';

export const metadata: Metadata = {
    title: 'Страница не найдена',
};

export default function NotFound() {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.code}>404</h1>
            <h2 className={styles.title}>Страница не найдена</h2>
            <p className={styles.text}>
                Возможно, страница была удалена или её никогда не существовало.
            </p>
            <Link href="/" className={styles.link}>
                На главную
            </Link>
        </div>
    );
}
