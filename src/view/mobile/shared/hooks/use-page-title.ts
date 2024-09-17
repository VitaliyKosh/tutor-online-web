import { useLocation } from 'react-router-dom';

export const usePageTitle = (useHeaderTitle: (value?: string | undefined) => void) => {
    const location = useLocation();

    const state: { pageTitle: string } = location.state;

    const hasState = Boolean(state);

    useHeaderTitle(hasState ? state.pageTitle : undefined);
};
