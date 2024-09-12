import { FC } from 'react';
import s from './index.module.css';
import classNames from 'classnames';
import { Size } from 'tutor-online-global-shared';

type Sizes = Size | 'iphoneX';
interface Props {
    size: Sizes;
}

const sizeMapping: Record<Sizes, number> = {
    '3xs': 2,
    '2xs': 3,
    xs: 5,
    s: 8,
    m: 10,
    l: 20,
    xl: 30,
    '2xl': 40,
    '3xl': 60,
    iphoneX: 34,
};

export const Gap: FC<Props> = ({ size }) => {
    return <div className={classNames(s.gap)} style={{ height: `${sizeMapping[size]}px` }} />;
};
