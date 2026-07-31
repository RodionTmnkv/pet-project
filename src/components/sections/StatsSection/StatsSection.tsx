'use client';

import { type FC } from 'react';
import { cn } from '@/utils/cn';
import { Section } from '@/components/ui';
import { useInView } from '@/hooks/useInView';
import { useCountUp } from '@/hooks/useCountUp';
import { STATS, TStat } from '@/data/stats';
import type { TStatsSectionProps } from './StatsSection.types';
import styles from './StatsSection.module.scss';

const StatCard: FC<{ stat: TStat; isActive: boolean }> = ({ stat, isActive }) => {
    const count = useCountUp(stat.value, isActive, 2500);

    return (
        <div className={styles.card}>
            <span className={styles.value}>
                {count.toLocaleString('ru-RU')}
                {stat.suffix}
            </span>
            <span className={styles.label}>{stat.label}</span>
        </div>
    );
};

const StatsSection: FC<TStatsSectionProps> = ({ stats = STATS, className }) => {
    const { ref, isInView } = useInView(0.2);

    return (
        <Section className={cn(styles.section, className)} heading="Наши преимущества">
            <div ref={ref} className={styles.grid}>
                {stats.map((stat) => (
                    <StatCard key={stat.id} stat={stat} isActive={isInView} />
                ))}
            </div>
        </Section>
    );
};

StatsSection.displayName = 'StatsSection';

export { StatsSection };
