import { ButtonsListButtons } from '../types';
import { Button } from './button';
import s from './index.module.css';

type Props = {
    buttons: ButtonsListButtons;
};

export const ButtonsList = ({ buttons }: Props) => {
    return (
        <div className={s.buttonsList}>
            {buttons.map((b, i) => (
                <ButtonsList.Button key={b.key ?? i} button={b} onClick={b.onClick}/>
            ))}
        </div>
    );
};

ButtonsList.Button = Button;
