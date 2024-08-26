import { createRoot } from 'react-dom/client';

import './index.css';
import App from '@/app/app';
import React from 'react';
import { ErrorBoundary } from './app/providers/ErrorBoundary';

console.log(123);

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </React.StrictMode>,
);
