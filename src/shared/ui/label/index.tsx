import { FC } from 'react';
import s from './index.module.css';
import { Text } from '@/shared/ui/text';
import classNames from 'classnames';

type Props = {
    className?: string;
    backgroundColor: string;
    text: string;
    size?: 's' | 'm';
};

export const Label: FC<Props> = ({ className, text, size = 's', backgroundColor }) => {
    return (
        <div className={classNames(s.label, s[size], className)} style={{ backgroundColor }}>
            <Text textSize={size} textColor='white'>
                {text}
            </Text>
        </div>
    );
};
