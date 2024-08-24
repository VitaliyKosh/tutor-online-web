import { FC, useEffect, useState } from 'react';
import cls from './Logo.module.css';
import classNames from 'classnames';

interface LogoProps {
    className?: string;
}

const text = 'WallBreaker';

export const Logo: FC<LogoProps> = (props) => {
    const { className, ...otherProps } = props;

    const [logoText, setLogoText] = useState(text[0]);

    const nextLetter = (newText: string) => {
        if (logoText.length < text.length) {
            setTimeout(() => {
                setLogoText(newText + text.split(newText)[1][0]);
            }, Math.random() * 50 + 150);
        }
    };

    useEffect(() => {
        nextLetter(logoText);
    }, [logoText]);

    return (
        <div className={classNames(cls.logo, className)} {...otherProps}>
            {logoText}
        </div>
    );
};
