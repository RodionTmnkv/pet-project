'use client';

import { type FC } from 'react';
import { cn } from '@/utils/cn';
import { Icon } from '@/components/ui';
import type { TPaginationProps } from './Pagination.types';
import styles from './Pagination.module.scss';

const Pagination: FC<TPaginationProps> = ({ currentPage, totalPages, onPageChange, className }) => {
    if (totalPages <= 1) return null;

    const pages: (number | '...')[] = [];

    if (totalPages <= 7) {
        for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
        pages.push(1);
        if (currentPage > 3) pages.push('...');

        const start = Math.max(2, currentPage - 1);
        const end = Math.min(totalPages - 1, currentPage + 1);

        for (let i = start; i <= end; i++) pages.push(i);

        if (currentPage < totalPages - 2) pages.push('...');
        pages.push(totalPages);
    }

    return (
        <nav className={cn(styles.pagination, className)} aria-label="Пагинация">
            <button
                className={cn(styles.button, styles.arrow)}
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Предыдущая страница"
                type="button"
            >
                <Icon name="arrow-right" size={18} className={styles.arrowLeft} />
            </button>

            <div className={styles.pages}>
                {pages.map((page, index) =>
                    page === '...' ? (
                        <span key={`dots-${index}`} className={styles.dots}>
                            ...
                        </span>
                    ) : (
                        <button
                            key={page}
                            className={cn(styles.button, styles.page, {
                                [styles.pageActive]: page === currentPage,
                            })}
                            onClick={() => onPageChange(page as number)}
                            aria-label={`Страница ${page}`}
                            aria-current={page === currentPage ? 'page' : undefined}
                            type="button"
                        >
                            {page}
                        </button>
                    ),
                )}
            </div>

            <button
                className={cn(styles.button, styles.arrow)}
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Следующая страница"
                type="button"
            >
                <Icon name="arrow-right" size={18} />
            </button>
        </nav>
    );
};

Pagination.displayName = 'Pagination';

export { Pagination };
