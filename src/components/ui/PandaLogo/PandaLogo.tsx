import { type FC } from 'react';
import Image from 'next/image';
import { cn } from '@/utils/cn';
import { assetPath } from '@/utils/assetPath';
import type { TPandaLogoProps } from './PandaLogo.types';
import styles from './PandaLogo.module.scss';

const PandaLogo: FC<TPandaLogoProps> = ({
    width = 64,
    height = 64,
    opacity = 0.8,
    className,
    style,
    ...rest
}) => {
    return (
        <div
            className={cn(styles.wrapper, className)}
            style={
                {
                    '--panda-width': `${width}px`,
                    '--panda-height': `${height}px`,
                    '--panda-opacity': opacity,
                    ...style,
                } as React.CSSProperties
            }
            {...rest}
        >
            <Image
                src={assetPath('/images/common/panda-logo.svg')}
                alt="Pet Project"
                width={width}
                height={height}
                className={styles.logo}
            />
        </div>
    );
};

PandaLogo.displayName = 'PandaLogo';

export { PandaLogo };
