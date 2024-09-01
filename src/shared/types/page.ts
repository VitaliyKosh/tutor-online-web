import { ReactNode } from 'react';

export type UseHeaderAddon = (
    headerRightAddon?: ReactNode | undefined,
    dependencies?: unknown[],
) => (headerRightAddon: ReactNode | undefined) => void;

export type UseHeaderTitle = (value?: string | undefined) => (value: string | undefined) => void;

export interface PageProps {
    className?: string;
    header: boolean;
    footer: boolean;
    isStandaloneIphoneX: boolean;
    useHeaderTitle: UseHeaderTitle;
    useHeaderAddon: UseHeaderAddon;
    params: Partial<Record<string, string>>;
}

type PageComponent = (props: PageProps) => ReactNode;
export type PC = PageComponent;
