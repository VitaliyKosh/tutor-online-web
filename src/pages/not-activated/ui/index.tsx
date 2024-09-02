import { useAppSelector } from '@/shared/hooks/use-app-selector';
import c from './index.module.css';
import { AccountTypes } from 'tutor-online-global-shared';
import { Navigate } from 'react-router-dom';
import { paths } from '@/shared/lib/path';
import { RouteNames } from '@/shared/consts/paths';

export const NotActivatedPage = () => {
    const accountType = useAppSelector((s) => s.user.user?.accountType);

    if (accountType !== AccountTypes.NOT_ACTIVATED) {
        return <Navigate to={paths.getRoutePath(RouteNames.MAIN)} replace={true} />;
    }

    return (
        <div className={c.notFoundPage}>
            <p>NotActivatedPage</p>
        </div>
    );
};
