import { FC, AllHTMLAttributes } from 'react';
import c from './index.module.css';
import classNames from 'classnames';
import { Size, TextAlign, TextColor } from 'tutor-online-global-shared';
import { parse } from 'node-html-parser';
import { MathJaxContext } from 'better-react-mathjax';

export type TextType = 'text' | 'title';

interface Props extends AllHTMLAttributes<HTMLParagraphElement> {
    textType?: TextType;
    textColor?: TextColor;
    textSize: Size;
    textAlign?: TextAlign;
    children: string | undefined;
}

export const Text: FC<Props> = ({
    className,
    textSize = 'm',
    textType = 'text',
    textColor = 'primary',
    textAlign = 'left',
    children,
    ...otherProps
}) => {
    const text = parse(children ?? '');

    return (
        <MathJaxContext>
            <span
                className={classNames(c.text, className)}
                style={{
                    font: `var(--${textType}-${textSize})`,
                    color: `var(--text-${textColor})`,
                    textAlign: textAlign,
                }}
                {...otherProps}
                dangerouslySetInnerHTML={{ __html: text.innerHTML }}
            ></span>
        </MathJaxContext>
    );
};
