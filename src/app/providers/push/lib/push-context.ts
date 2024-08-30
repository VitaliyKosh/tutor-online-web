import { createContext } from 'react';

export interface PushContext {
    subscribeId: string | undefined;
}

export const PushContext = createContext<PushContext>({ subscribeId: undefined });
