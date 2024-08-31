import { ReactNode } from 'react';

export interface PageProps {
    className?: string;
    header: boolean;
    footer: boolean;
    isStandaloneIphoneX: boolean;
    useHeaderTitle: (value: string | undefined) => (value: string | undefined) => void;
    params: Partial<Record<string, string>>;
}

type PageComponent = (props: PageProps) => ReactNode;
export type PC = PageComponent;
