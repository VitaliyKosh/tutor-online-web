import AppComponent from '@/app/app';
import React from 'react';
import { ErrorBoundary } from './app/providers/ErrorBoundary';
import { app } from '@/core/app';
import { createRoot } from 'react-dom/client';

app.initGlobalApp();

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ErrorBoundary>
            <AppComponent />
        </ErrorBoundary>
    </React.StrictMode>,
);
