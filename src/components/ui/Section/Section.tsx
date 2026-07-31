import { type FC } from 'react';
import { cn } from '@/utils/cn';
import { Container } from '@/components/ui/Container/Container';
import type { TSectionProps } from './Section.types';
import styles from './Section.module.scss';

const Section: FC<TSectionProps> = ({
    children,
    as: Tag = 'section',
    className,
    topPadding = 'md',
    bottomPadding = 'md',
    heading,
    headingClassName,
    ...rest
}) => {
    return (
        <Tag
            className={cn(
                styles.section,
                styles[`top-${topPadding}`],
                styles[`bottom-${bottomPadding}`],
                className,
            )}
            {...rest}
        >
            <Container>
                {heading && <h2 className={cn(styles.heading, headingClassName)}>{heading}</h2>}
                {children}
            </Container>
        </Tag>
    );
};

Section.displayName = 'Section';

export { Section };
