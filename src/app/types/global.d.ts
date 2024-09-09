declare module 'react-manifest';

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

import { Application } from '@/shared/lib/clear';

interface ApplicationModules {
    counter: CounterModule;
}

declare global {
    interface Window {
        app: Application<object>;
    }
}

export {};
