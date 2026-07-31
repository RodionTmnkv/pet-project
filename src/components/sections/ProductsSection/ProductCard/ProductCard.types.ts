import { TProduct } from '@/data/products';

export type TProductCardProps = {
    product: TProduct;
    onCardClick?: (product: TProduct) => void;
    className?: string;
};
