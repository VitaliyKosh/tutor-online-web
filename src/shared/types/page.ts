import { ReactNode } from 'react';

export interface PageProps {
    className?: string;
    header: boolean;
    footer: boolean;
    isStandaloneIphoneX: boolean;
    setHeaderTitle: (value: string | undefined) => void;
}

type PageComponent = (props: PageProps) => ReactNode;
export type PC = PageComponent;
