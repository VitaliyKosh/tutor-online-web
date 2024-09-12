import { SDUIElement } from 'tutor-online-global-shared';

export type SduiElementComponent<T extends SDUIElement = SDUIElement> = (props: {
    data: T['data'];
}) => React.ReactNode;
