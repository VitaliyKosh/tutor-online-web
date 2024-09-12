import { TextSDUIElement } from 'tutor-online-global-shared';
import { SduiElementComponent } from '../../types';
import { Text } from '@/view/mobile/components/ui/text';

export const TextSduiElement: SduiElementComponent<TextSDUIElement> = ({ data }) => {
    const { type, value, size = 'm', color, textAlign } = data;

    return (
        <Text textType={type} textSize={size} textColor={color} textAlign={textAlign}>
            {value}
        </Text>
    );
};
