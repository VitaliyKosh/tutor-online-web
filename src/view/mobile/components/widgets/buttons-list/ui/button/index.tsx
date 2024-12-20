import { Text } from '@/view/mobile/components/ui/text';
import { ButtonsListButton } from '../../types';
import s from './index.module.css';

type Props = {
    button: ButtonsListButton;
    onClick?: () => void;
};

export const Button = ({ button, onClick }: Props) => {
    return (
        <div className={s.button}>
            <Text textSize={'m'} onClick={onClick}>
                {button.title}
            </Text>
        </div>
    );
};
