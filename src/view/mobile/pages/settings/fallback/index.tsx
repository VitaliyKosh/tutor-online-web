import s from './index.module.css';
import { PC } from '@/view/mobile/shared/types/page';

export const SettingsPageFallback: PC = () => {
    return <div className={s.page}></div>;
};
