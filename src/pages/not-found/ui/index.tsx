import { Link } from 'react-router-dom';
import c from './index.module.css';
import { paths } from '@/shared/lib/path';
import { RouteNames } from '@/shared/consts/paths';

export const NotFoundPage = () => {
    return (
        <div className={c.notFoundPage}>
            <p>Not Found</p>
            <Link to={paths.getRoutePath(RouteNames.MAIN)} replace={true}>
                На главную
            </Link>
        </div>
    );
};
