import { type FC } from 'react';
import { cn } from '@/utils/cn';
import { PandaLogo } from '@/components/ui';
import type { TFooterLogoProps } from './FooterLogo.types';
import styles from './FooterLogo.module.scss';

const FooterLogo: FC<TFooterLogoProps> = ({ className }) => {
    return (
        <PandaLogo width={80} height={80} opacity={0.6} className={cn(styles.order, className)} />
    );
};

FooterLogo.displayName = 'FooterLogo';

export { FooterLogo };
