import { type FC } from 'react';
import { cn } from '@/utils/cn';
import { Section } from '@/components/ui/Section/Section';
import type { TTextSectionProps } from './TextSection.types';
import styles from './TextSection.module.scss';

const TextSection: FC<TTextSectionProps> = ({
    children,
    heading,
    align = 'left',
    className,
    headingClassName,
}) => {
    return (
        <Section
            topPadding={heading ? 'md' : 'none'}
            bottomPadding={heading ? 'md' : 'sm'}
            heading={heading}
            headingClassName={cn(styles.heading, styles[`align-${align}`], headingClassName)}
            className={className}
        >
            <div className={cn(styles.content, styles[`align-${align}`])}>{children}</div>
        </Section>
    );
};

TextSection.displayName = 'TextSection';

export { TextSection };
