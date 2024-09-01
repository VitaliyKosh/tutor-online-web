import { RouteNames } from '@/shared/consts/paths';
import { paths } from '@/shared/lib/path';
import { PC } from '@/shared/types/page';
import { Link } from 'react-router-dom';

const MainPage: PC = ({ useHeaderTitle }) => {
    useHeaderTitle('Виталий Кошельков');

    return (
        <div>
            <Link to={paths.getRoutePath(RouteNames.SDUI)}>
                <button>go to SDUI</button>
            </Link>
        </div>
    );
};

export default MainPage;
