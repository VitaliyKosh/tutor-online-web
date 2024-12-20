import { ReactNode } from 'react';

export enum ButtonsListButtonType {
    Button = 'Button',
    Switcher = 'Switcher',
}

export type ButtonsListButton = {
    type?: ButtonsListButtonType;
    key?: string;
    title: string;
    subTitle?: string;
    icon?: ReactNode;
    onClick?: () => void;
};

export type ButtonsListButtons = ButtonsListButton[];
