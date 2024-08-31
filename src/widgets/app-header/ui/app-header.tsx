import { useNavigate } from 'react-router-dom';
import { paths } from '@/shared/lib/path';
import { RouteNames } from '@/shared/consts/paths';
import { Header } from '@/shared/ui/header';

interface Props {
    header: string;
    defaultPreviousRouteName: RouteNames | undefined;
    showBackButton: boolean
}

export const AppHeader = ({ header, defaultPreviousRouteName, showBackButton }: Props) => {
    const navigate = useNavigate();

    const onBackButtonClick = () => {
        if (window.history.state.idx > 0) {
            navigate(-1);
        } else if (defaultPreviousRouteName) {
            navigate(paths.getRoutePath(defaultPreviousRouteName), { replace: true });
        } else {
            navigate(paths.getRoutePath(RouteNames.MAIN), { replace: true });
        }
    };

    return <Header showBackButton={showBackButton} text={header} onBackButtonClick={onBackButtonClick} />;
};
