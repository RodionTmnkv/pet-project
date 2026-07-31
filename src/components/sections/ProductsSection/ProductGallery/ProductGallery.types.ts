import { TProduct } from '@/data/products';

export type TProductGalleryProps = {
    product: TProduct;
    isOpen: boolean;
    onClose: () => void;
    className?: string;
};
