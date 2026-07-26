import { type ButtonHTMLAttributes } from 'react';

export type TBurgerButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOpen: boolean;
    className?: string;
};
