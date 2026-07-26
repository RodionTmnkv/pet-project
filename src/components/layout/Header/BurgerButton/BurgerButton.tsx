'use client';

import { type FC } from 'react';
import { cn } from '@/utils/cn';
import type { TBurgerButtonProps } from './BurgerButton.types';
import styles from './BurgerButton.module.scss';

const BurgerButton: FC<TBurgerButtonProps> = ({ isOpen, className, onClick, ...rest }) => {
    const label = isOpen ? 'Закрыть меню' : 'Открыть меню';

    return (
        <button
            className={cn(styles.burger, { [styles.burgerOpen]: isOpen }, className)}
            onClick={onClick}
            aria-label={label}
            aria-expanded={isOpen}
            type="button"
            {...rest}
        >
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
            <span className={styles.srOnly}>{label}</span>
        </button>
    );
};

BurgerButton.displayName = 'BurgerButton';

export { BurgerButton };
