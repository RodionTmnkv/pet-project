import { type TNavItem } from '@/types';

export type TNavProps = {
    items?: TNavItem[];
    isOpen: boolean;
    onClose: () => void;
    className?: string;
};
