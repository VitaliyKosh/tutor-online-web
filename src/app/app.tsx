import { type FC } from 'react';
import './styles/index.css';
import { RouterProvider } from './providers/router/ui/router-provider';
import { PushProvider } from './providers/push/ui';
import { StoreProvider } from './providers/store/ui/store-provider';

const App: FC = () => {
    return (
        <StoreProvider>
            <PushProvider>
                <RouterProvider />
            </PushProvider>
        </StoreProvider>
    );
};

export default App;
