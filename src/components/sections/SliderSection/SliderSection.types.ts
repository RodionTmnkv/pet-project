import { type TSlide } from '@/data/slides';

export type TSliderSectionProps = {
    slides: TSlide[];
    autoPlayInterval?: number;
    className?: string;
};
