import classNames from 'classnames';

import { SduiElement } from './elements/sdui-element';
import s from './index.module.css';
import { SDUIWidget } from 'tutor-online-global-shared';

interface Props {
    className?: string;
    data: SDUIWidget;
}

export const SduiWidget = ({ className, data }: Props) => {
    console.log(data.elements);

    return (
        <div className={classNames(s.sduiWidget, className)}>
            {data.elements.map((sduiElement, i) => {
                return <SduiElement key={i} type={sduiElement.type} data={sduiElement.data} />;
            })}
        </div>
    );
};
