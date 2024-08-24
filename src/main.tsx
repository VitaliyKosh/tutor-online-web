import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from '@/app/app';
import React from 'react';
import { ErrorBoundary } from './app/providers/ErrorBoundary';

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </BrowserRouter>
    </React.StrictMode>,
);
