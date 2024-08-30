import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 3010,
    },
    plugins: [react()],
    define: {
        APP_VERSION: JSON.stringify(process.env.npm_package_version),
        IS_DEVELOPMENT: JSON.stringify(process.env.npm_package_version),
        IS_PRODUCTION: JSON.stringify(process.env.npm_package_version),
        API_URL: JSON.stringify(process.env.npm_package_version),
    },
    resolve: {
        alias: {
            '@': '/src',
        },
    },
});
