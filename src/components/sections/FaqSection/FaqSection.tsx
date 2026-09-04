'use client';

import { type FC, useState } from 'react';
import { cn } from '@/utils/cn';
import { Section } from '@/components/ui';
import { FAQ_ITEMS } from '@/data/faq';
import { FaqItem } from './FaqItem/FaqItem';
import type { TFaqSectionProps } from './FaqSection.types';
import styles from './FaqSection.module.scss';

const FaqSection: FC<TFaqSectionProps> = ({
    items = FAQ_ITEMS,
    heading = 'Частые вопросы',
    className,
}) => {
    const [openIds, setOpenIds] = useState<Set<string>>(new Set());

    const handleToggle = (id: string) => {
        setOpenIds((prev) => {
            const next = new Set(prev);
            if (next.has(id)) {
                next.delete(id);
            } else {
                next.add(id);
            }
            return next;
        });
    };

    return (
        <Section heading={heading} background="gray" className={cn(styles.section, className)}>
            <div className={styles.list}>
                {items.map((item) => (
                    <FaqItem
                        key={item.id}
                        item={item}
                        isOpen={openIds.has(item.id)}
                        onToggle={() => handleToggle(item.id)}
                    />
                ))}
            </div>
        </Section>
    );
};

FaqSection.displayName = 'FaqSection';

export { FaqSection };
