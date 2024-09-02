import { RouteNames } from '@/shared/consts/paths';
import { paths } from '@/shared/lib/path';
import { useSignOut } from '@/shared/store/slices/user';
import { PC } from '@/shared/types/page';
import { Link } from 'react-router-dom';

const MainPage: PC = ({ useHeaderTitle }) => {
    const { signOut } = useSignOut();
    useHeaderTitle('Виталий Кошельков');

    return (
        <div>
            <Link to={paths.getRoutePath(RouteNames.SDUI)}>
                <button>go to SDUI</button>
            </Link>

            <button onClick={signOut}>signOutAction</button>
        </div>
    );
};

export default MainPage;
