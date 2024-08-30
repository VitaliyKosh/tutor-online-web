import { ReactNode } from 'react';

import { Provider } from 'react-redux';

import { setupStore } from '../model/store';

const store = setupStore();

interface Props {
  children: ReactNode;
}

export const StoreProvider = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};
