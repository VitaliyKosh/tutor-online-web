import { ScreenLayoutProps } from '../types';
import { AccountTypes } from 'tutor-online-global-shared';
import { SettingsPage } from '@/view/mobile/pages/settings';
import { SettingsPageFallback } from '@/view/mobile/pages/settings/fallback';

export const settingsPageLayoutProps: ScreenLayoutProps = {
    Page: SettingsPage,
    Fallback: SettingsPageFallback,
    allowedAccountTypes: [AccountTypes.USER],
    headerTitle: 'Настройки',
};
