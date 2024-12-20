import { PC } from '@/view/mobile/shared/types/page';
import s from './index.module.css';
import { ButtonsList, ButtonsListButtons } from '@/view/mobile/components/widgets/buttons-list';

const SettingsPage: PC = () => {
    const buttons: ButtonsListButtons = [
        {
            key: '1',
            title: 'Title',
        },
        {
            key: '2',
            title: 'Title 2',
        },
        {
            key: '3',
            title: 'Title 3',
        },
    ];
    return (
        <div className={s.page}>
            <ButtonsList buttons={buttons} />
        </div>
    );
};

export default SettingsPage;
