import { type FC } from 'react';
import './styles/index.css';
import { RouterProvider } from './providers/router/ui/router-provider';
import { PushProvider } from './providers/push/ui';
import { StoreProvider } from './providers/store/ui/store-provider';
import { AuthProvider } from './providers/auth-provider';
import { GlobalLoader } from './layouts/global-loader';

const App: FC = () => {
    return (
        <StoreProvider>
            <AuthProvider>
                <PushProvider>
                    <GlobalLoader>
                        <RouterProvider />
                    </GlobalLoader>
                </PushProvider>
            </AuthProvider>
        </StoreProvider>
    );
};

export default App;
