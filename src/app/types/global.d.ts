declare module 'react-manifest'

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg' {
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
    export default SVG
}

declare interface Window {

}

declare namespace NodeJS {
    interface ProcessEnv {
        // ENV: 'DEVELOP' | 'PRODUCTION'
        // API_URL: string
    }
}

declare const __IS_DEV__: boolean
