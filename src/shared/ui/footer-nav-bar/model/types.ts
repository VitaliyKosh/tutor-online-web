import { RouteNames } from '@/shared/consts/paths';
import { ReactNode } from 'react';

export interface FooterNavBarLink {
    key: string;
    to: RouteNames;
    content: ReactNode;
    label: string;
}
