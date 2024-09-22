import { type FC } from 'react';
import './styles/index.css';
import { RouterProvider } from './providers/router/ui/router-provider';
import { GlobalLoader } from './layouts/global-loader';
import { KeyboardLayout } from './layouts/keyboard';
import { info } from '@/view/mobile/shared/lib/info';
import { ErrorBoundary } from './providers/ErrorBoundary';
import { useAuth } from './hooks/use-auth';
import { usePush } from './hooks/use-push';

info.initInfoBlock();
info.showInfoBlock();

const App: FC = () => {
    usePush();
    useAuth();

    return (
        <ErrorBoundary>
            <KeyboardLayout>
                <GlobalLoader>
                        <RouterProvider />
                </GlobalLoader>
            </KeyboardLayout>
        </ErrorBoundary>
    );
};

export default App;
