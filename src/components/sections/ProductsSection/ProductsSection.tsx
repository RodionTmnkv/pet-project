'use client';

import { type FC, useState, useMemo } from 'react';
import { cn } from '@/utils/cn';
import { Section } from '@/components/ui';
import { ProductCard } from './ProductCard/ProductCard';
import { ProductGallery } from './ProductGallery/ProductGallery';
import { Pagination } from './Pagination/Pagination';
import { PRODUCTS, TProduct } from '@/data/products';
import { useDevice } from '@/hooks/useDevice';
import type { TProductsSectionProps } from './ProductsSection.types';
import styles from './ProductsSection.module.scss';

const ITEMS_PER_PAGE: Record<string, number> = {
    mobile: 4,
    tablet: 6,
    laptop: 8,
    desktop: 8,
};

const ProductsSection: FC<TProductsSectionProps> = ({
    products = PRODUCTS,
    heading = 'Продукция',
    className,
}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProduct, setSelectedProduct] = useState<TProduct | null>(null);

    const device = useDevice();
    const itemsPerPage = ITEMS_PER_PAGE[device];
    const totalPages = Math.ceil(products.length / itemsPerPage);

    // Если текущая страница вышла за пределы — обрезаем
    const safePage = Math.min(currentPage, totalPages || 1);

    const currentProducts = useMemo(() => {
        const start = (safePage - 1) * itemsPerPage;
        return products.slice(start, start + itemsPerPage);
    }, [products, safePage, itemsPerPage]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleCardClick = (product: TProduct) => {
        setSelectedProduct(product);
    };

    const handleCloseGallery = () => {
        setSelectedProduct(null);
    };

    return (
        <Section heading={heading} className={cn(styles.section, className)} id="products-section">
            <div className={styles.grid}>
                {currentProducts.map((product) => (
                    <ProductCard key={product.id} product={product} onCardClick={handleCardClick} />
                ))}
            </div>

            <Pagination
                currentPage={safePage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />

            {selectedProduct && (
                <ProductGallery
                    product={selectedProduct}
                    isOpen={!!selectedProduct}
                    onClose={handleCloseGallery}
                />
            )}
        </Section>
    );
};

ProductsSection.displayName = 'ProductsSection';

export { ProductsSection };
