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
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Section background="gray" heading={heading} className={cn(styles.section, className)}>
            <div className={styles.list}>
                {items.map((item, index) => (
                    <FaqItem
                        key={item.id}
                        item={item}
                        isOpen={openIndex === index}
                        onToggle={() => handleToggle(index)}
                    />
                ))}
            </div>
        </Section>
    );
};

FaqSection.displayName = 'FaqSection';

export { FaqSection };
