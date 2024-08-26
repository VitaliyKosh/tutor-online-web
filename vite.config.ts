import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 3011,
    },
    plugins: [
        react(),
        // VitePWA({
            // injectRegister: 'auto',
            // registerType: 'autoUpdate',
            // workbox: {
            //     clientsClaim: true,
            //     skipWaiting: true,
            // },
            // devOptions: {
            //     enabled: true,
            // },
        // }),
    ],
    resolve: {
        alias: {
            '@': '/src',
        },
    },
});
