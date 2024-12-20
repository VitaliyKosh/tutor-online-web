import { PC } from '@/view/mobile/shared/types/page';
import s from './index.module.css';
import { ButtonsList, ButtonsListButtons } from '@/view/mobile/components/widgets/buttons-list';
import { auth, user } from '@/core/app';
import { Avatar } from '@/view/mobile/components/ui/avatar';
import { Gap } from '@/view/mobile/components/ui/gap';
import { Text } from '@/view/mobile/components/ui/text';

const MenuPage: PC = () => {
    const currentUser = user.useUser();

    if (!currentUser) {
        return null;
    }

    const { firstName, lastName } = currentUser;

    const buttons: ButtonsListButtons = [
        {
            title: 'Title',
        },
        {
            title: 'Title 2',
        },
        {
            title: 'Выход',
            onClick: () => {
                auth.signOut();
            },
        },
    ];

    const fullName = `${firstName} ${lastName}`;

    return (
        <div className={s.page}>
            <div className={s.header}>
                <Avatar />
                <Text textSize={'xl'}>{fullName}</Text>
            </div>
            <Gap size={'2xl'} />
            <ButtonsList buttons={buttons} />
        </div>
    );
};

export default MenuPage;
