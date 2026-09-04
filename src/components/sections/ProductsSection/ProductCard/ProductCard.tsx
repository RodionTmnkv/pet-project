'use client';

import { type FC, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/utils/cn';
import { assetPath } from '@/utils/assetPath';
import { Icon } from '@/components/ui';
import type { TProductCardProps } from './ProductCard.types';
import styles from './ProductCard.module.scss';

const ProductCard: FC<TProductCardProps> = ({ product, onCardClick, className }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        onCardClick?.(product);
    };

    const handleDetailClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        onCardClick?.(product);
    };

    return (
        <div
            className={cn(styles.card, { [styles.cardFlipped]: isFlipped }, className)}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            onClick={handleClick}
            role="button"
            tabIndex={0}
            aria-label={`Подробнее о ${product.title}`}
        >
            <div className={styles.cardInner}>
                {/* Лицевая сторона */}
                <div className={styles.cardFront}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src={assetPath(product.image)}
                            alt={product.title}
                            fill
                            sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.info}>
                        <h3 className={styles.title}>{product.title}</h3>
                        <p className={styles.description}>{product.description}</p>
                        <span className={styles.arrowWrapper}>
                            <Icon name="arrow-right" size={18} className={styles.arrowIcon} />
                        </span>
                    </div>
                </div>

                {/* Обратная сторона */}
                <div className={styles.cardBack}>
                    <h3 className={styles.backTitle}>{product.title}</h3>
                    <button className={styles.backButton} onClick={handleDetailClick} type="button">
                        Подробнее
                    </button>
                </div>
            </div>
        </div>
    );
};

ProductCard.displayName = 'ProductCard';

export { ProductCard };
