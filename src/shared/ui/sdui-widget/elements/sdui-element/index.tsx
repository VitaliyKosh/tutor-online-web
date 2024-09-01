import classNames from 'classnames';

import s from './index.module.css';
import { SduiElementComponent } from '../../types';
import { TextSduiElement } from '../text';
import { SDUIElement } from 'tutor-online-global-shared';

interface Props {
    type: SDUIElement['type'];
    data: SDUIElement['data'];
}

const sduiElementsTypeMapping: Record<SDUIElement['type'], SduiElementComponent<SDUIElement>> = {
    text: TextSduiElement as SduiElementComponent<SDUIElement>,
};

export const SduiElement = ({ type, data }: Props) => {
    const Element = sduiElementsTypeMapping[type];

    return <Element data={data} />;
};
