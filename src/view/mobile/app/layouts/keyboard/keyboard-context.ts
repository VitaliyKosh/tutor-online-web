import { createContext } from 'react';

export interface KeyboardContext {
    isOpened: boolean;
}

export const KeyboardContext = createContext<KeyboardContext>({ isOpened: false });
