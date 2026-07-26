import { type SVGAttributes } from 'react';

export type TIconName =
    'telegram' | 'whatsapp' | 'email' | 'github' | 'linkedin' | 'burger' | 'close' | 'arrow-right';

export type TIconProps = SVGAttributes<SVGSVGElement> & {
    name: TIconName;
    size?: number;
    className?: string;
};
