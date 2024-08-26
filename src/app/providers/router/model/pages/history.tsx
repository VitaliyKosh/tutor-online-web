import { FooterTabs } from '@/entities/app-footer';
import { ScreenLayoutProps } from '../types';

export const HistoryPageLayoutProps: ScreenLayoutProps = {
  Page: () => <></>,
  headerTitle: 'My Cards',
  tab: FooterTabs.HISTORY,
};
