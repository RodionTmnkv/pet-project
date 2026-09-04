import { TFaqItem } from '@/data/faq';

export type TFaqItemProps = {
    item: TFaqItem;
    isOpen: boolean;
    onToggle: () => void;
};
