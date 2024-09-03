import { type FC } from 'react';
import './styles/index.css';
import { RouterProvider } from './providers/router/ui/router-provider';
import { PushProvider } from './providers/push/ui';
import { StoreProvider } from './providers/store/ui/store-provider';
import { AuthProvider } from './providers/auth-provider';
import { GlobalLoader } from './layouts/global-loader';
import { KeyboardLayout } from './layouts/keyboard';
import { info } from '@/shared/lib/info';

info.initInfoBlock();

const App: FC = () => {
    return (
        <StoreProvider>
            <AuthProvider>
                <PushProvider>
                    <KeyboardLayout>
                        <GlobalLoader>
                            <RouterProvider />
                        </GlobalLoader>
                    </KeyboardLayout>
                </PushProvider>
            </AuthProvider>
        </StoreProvider>
    );
};

export default App;
