import c from './index.module.css';
import { AccountTypes } from 'tutor-online-global-shared';
import { Navigate } from 'react-router-dom';
import { paths } from '@/view/mobile/shared/lib/path';
import { RouteNames } from '@/view/mobile/shared/consts/paths';
import { user } from '@/core/app';

export const NotActivatedPage = () => {
    const userState = user.useUser();

    if (userState?.accountType !== AccountTypes.NOT_ACTIVATED) {
        return <Navigate to={paths.getRoutePath(RouteNames.MAIN)} replace={true} />;
    }

    return (
        <div className={c.notFoundPage}>
            <p>NotActivatedPage</p>
        </div>
    );
};
