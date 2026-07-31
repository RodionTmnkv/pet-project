import type { Metadata } from 'next';
import { SliderSection } from '@/components/sections/SliderSection/SliderSection';
import { StatsSection } from '@/components/sections/StatsSection/StatsSection';
import { ProductsSection } from '@/components/sections/ProductsSection/ProductsSection';
import { SLIDES } from '@/data/slides';

export const metadata: Metadata = {
    title: 'Pet Project — Главная',
    description: 'Переработка бумажных отходов и утилизация мукулатуры',
};

export default function HomePage() {
    return (
        <>
            <SliderSection slides={SLIDES} autoPlayInterval={5000} />
            <StatsSection />
            <ProductsSection />
        </>
    );
}
