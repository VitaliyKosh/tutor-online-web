import { RouteNames } from '@/view/mobile/shared/consts/paths';
import { FC } from 'react';

export interface FooterNavBarLink {
    key: string;
    to: RouteNames;
    Content: FooterNavBarContent;
    label: string;
}

export type FooterNavBarContentProps = { active: boolean };

export type FooterNavBarContent = FC<FooterNavBarContentProps>;
