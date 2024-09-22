import AppComponent from '@/view/mobile/app/app';
import React from 'react';
import { app } from '@/core/app';
import { createRoot } from 'react-dom/client';

app.initGlobalApp();

createRoot(document.getElementById('root')!).render(
    // <React.StrictMode>
        <AppComponent />
    // </React.StrictMode>,
);
