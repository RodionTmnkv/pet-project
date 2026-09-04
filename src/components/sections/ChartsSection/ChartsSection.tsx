'use client';

import { type FC, useState } from 'react';
import { cn } from '@/utils/cn';
import { Section } from '@/components/ui';
import { CHART_DATA, TYearData } from '@/data/charts';
import { useInView } from '@/hooks/useInView';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { TChartsSectionProps } from './ChartsSection.types';
import styles from './ChartsSection.module.scss';

type TCustomBarShapeProps = {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    fill?: string;
    index?: number;
    isHovered?: boolean;
};

type TBarChartBlockProps = {
    title: string;
    dataKey: keyof TYearData;
    name: string;
    colors: string[];
    animationBegin?: number;
    isInView: boolean;
    hoveredIndex: number | null;
    onHover: (index: number | null) => void;
    gradientPrefix: string;
};

const CustomBar = ({ x, y, width, height, fill, isHovered }: TCustomBarShapeProps) => {
    if (x === undefined || y === undefined || width === undefined || height === undefined) {
        return null;
    }

    const hoverOpacity = isHovered ? 0.85 : 1;

    return (
        <g opacity={hoverOpacity}>
            <rect x={x} y={y} width={width} height={height} fill={fill} rx={3} />
        </g>
    );
};

const CustomTooltip = ({
    active,
    payload,
    label,
}: {
    active?: boolean;
    payload?: Array<{ name: string; value: number; color: string }>;
    label?: string;
}) => {
    if (!active || !payload?.length) return null;

    return (
        <div className={styles.tooltip}>
            <p className={styles.tooltipYear}>{label} год</p>
            {payload.map((item) => (
                <p key={item.name} className={styles.tooltipItem}>
                    <span className={styles.tooltipDot} style={{ backgroundColor: item.color }} />
                    {item.name}: {item.value.toLocaleString('ru-RU')} тыс.руб
                </p>
            ))}
        </div>
    );
};

const BarChartBlock: FC<TBarChartBlockProps> = ({
    title,
    dataKey,
    name,
    colors,
    animationBegin = 0,
    isInView,
    hoveredIndex,
    onHover,
    gradientPrefix,
}) => {
    return (
        <div className={styles.chartBlock}>
            <h3 className={styles.chartTitle}>{title}</h3>
            <ResponsiveContainer width="100%" height={340}>
                <BarChart
                    data={CHART_DATA}
                    margin={{ top: 20, right: 20, bottom: 0, left: 0 }}
                    onMouseMove={(state) => {
                        if (state?.activeTooltipIndex !== undefined) {
                            onHover(Number(state.activeTooltipIndex));
                        }
                    }}
                    onMouseLeave={() => onHover(null)}
                >
                    <defs>
                        {colors.map((color, i) => (
                            <linearGradient
                                key={i}
                                id={`${gradientPrefix}-${i}`}
                                x1="0"
                                y1="0"
                                x2="1"
                                y2="0"
                            >
                                <stop offset="0%" stopColor={colors[0]} stopOpacity={1} />
                                <stop
                                    offset="50%"
                                    stopColor={colors[Math.floor(colors.length / 2)]}
                                    stopOpacity={1}
                                />
                                <stop
                                    offset="100%"
                                    stopColor={colors[colors.length - 1]}
                                    stopOpacity={1}
                                />
                            </linearGradient>
                        ))}
                    </defs>
                    <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="rgba(26,26,46,0.06)"
                        vertical={false}
                    />
                    <XAxis
                        dataKey="year"
                        tick={{ fill: '#5c5775', fontSize: 13, fontWeight: 600 }}
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis
                        tick={{ fill: '#5c5775', fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                        width={50}
                    />
                    <Tooltip content={<CustomTooltip />} cursor={false} />
                    <Bar
                        dataKey={dataKey}
                        name={name}
                        shape={(props: TCustomBarShapeProps) => (
                            <CustomBar
                                {...props}
                                fill={`url(#${gradientPrefix}-${(props.index ?? 0) % colors.length})`}
                                isHovered={hoveredIndex === props.index}
                            />
                        )}
                        isAnimationActive={isInView}
                        animationDuration={1400}
                        animationEasing="ease-out"
                        animationBegin={animationBegin}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

const VOLUME_COLORS = ['#c5e85a', '#b1e02d', '#8fb824'];
const PROFIT_COLORS = ['#28a745', '#167d28', '#0f5c1e'];

const ChartsSection: FC<TChartsSectionProps> = ({ className }) => {
    const { ref, isInView } = useInView(0.2);
    const [hoveredVolume, setHoveredVolume] = useState<number | null>(null);
    const [hoveredProfit, setHoveredProfit] = useState<number | null>(null);

    return (
        <Section
            heading="Динамика переработки"
            background="gray"
            className={cn(styles.section, className)}
        >
            <div ref={ref} className={styles.charts}>
                <BarChartBlock
                    title="Объём переработки по годам"
                    dataKey="volume"
                    name="Объём"
                    colors={VOLUME_COLORS}
                    isInView={isInView}
                    hoveredIndex={hoveredVolume}
                    onHover={setHoveredVolume}
                    gradientPrefix="volumeGradient"
                />
                <BarChartBlock
                    title="Прибыль от переработки"
                    dataKey="profit"
                    name="Прибыль"
                    colors={PROFIT_COLORS}
                    animationBegin={200}
                    isInView={isInView}
                    hoveredIndex={hoveredProfit}
                    onHover={setHoveredProfit}
                    gradientPrefix="profitGradient"
                />
            </div>
        </Section>
    );
};

ChartsSection.displayName = 'ChartsSection';

export { ChartsSection };
