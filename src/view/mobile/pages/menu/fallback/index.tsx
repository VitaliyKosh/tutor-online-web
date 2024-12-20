import s from './index.module.css';
import { PC } from '@/view/mobile/shared/types/page';

export const MenuPageFallback: PC = () => {
    return <div className={s.page}></div>;
};
