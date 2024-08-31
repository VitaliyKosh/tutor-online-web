import { FC, AllHTMLAttributes } from 'react';
import c from './index.module.css';
import classNames from 'classnames';

export type TextSize = 'xs' | 's' | 'm' | 'l' | 'xl';
export type TextType = 'text' | 'title';
export type TextColor =
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'primaryInverted'
    | 'secondaryInverted'
    | 'tertiaryInverted'
    | 'positive'
    | 'attention'
    | 'negative'
    | 'link';

interface Props extends AllHTMLAttributes<HTMLParagraphElement> {
    textType?: TextType;
    textColor?: TextColor;
    textSize: TextSize;
}

export const Text: FC<Props> = ({
    className,
    textSize = 'm',
    textType = 'text',
    textColor = 'primary',
    children,
    ...otherProps
}) => {
    return (
        <span
            className={classNames(c.text, className)}
            style={{
                font: `var(--${textType}-${textSize})`,
                color: `var(--text-${textColor})`,
            }}
            {...otherProps}
        >
            {children}
        </span>
    );
};
