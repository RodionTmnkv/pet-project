'use client';

import { type FC } from 'react';
import Link from 'next/link';
import { cn } from '@/utils/cn';
import type { TFaqItemProps } from './FaqItem.types';
import styles from './FaqItem.module.scss';

const FaqItem: FC<TFaqItemProps> = ({ item, isOpen, onToggle }) => {
    const { answer, link } = item;

    const renderAnswer = () => {
        if (!link) return answer;

        const parts = answer.split(link.label);

        return (
            <>
                {parts[0]}
                <Link href={link.href} className={styles.link}>
                    {link.label}
                </Link>
                {parts[1]}
            </>
        );
    };

    return (
        <div className={cn(styles.item, { [styles.itemOpen]: isOpen })}>
            <button
                className={styles.question}
                onClick={onToggle}
                aria-expanded={isOpen}
                type="button"
            >
                <span className={styles.questionText}>{item.question}</span>
                <span className={styles.icon}>{isOpen ? '−' : '+'}</span>
            </button>

            <div className={cn(styles.answerWrapper, { [styles.answerOpen]: isOpen })}>
                <div className={cn(styles.answer, { [styles.answerVisible]: isOpen })}>
                    <p className={styles.answerText}>{renderAnswer()}</p>
                </div>
            </div>
        </div>
    );
};

FaqItem.displayName = 'FaqItem';

export { FaqItem };
