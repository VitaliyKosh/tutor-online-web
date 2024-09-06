import { GlobalRouteNames } from '@/shared/consts/paths';
import { LS_INFO_BLOCK_KEY } from '@/shared/lib/info';
import { getIsStandalone } from '@/shared/lib/mobile';
import { paths } from '@/shared/lib/path';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const isStandalone = getIsStandalone();

export const usePwaGate = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isStandalone && localStorage.getItem('noPwa') !== 'true') {
            navigate(paths.getRoutePath(GlobalRouteNames.NO_PWA));
        }
    }, [navigate]);

    useEffect(() => {
        if (location.search === '?nopwa') {
            localStorage.setItem('noPwa', 'true');
        }
        if (location.search === '?nopwa=0') {
            localStorage.removeItem('noPwa');
        }
        if (location.search === '?console') {
            localStorage.setItem(LS_INFO_BLOCK_KEY, 'true');
        }
        if (location.search === '?console=0') {
            localStorage.removeItem(LS_INFO_BLOCK_KEY);
        }
    }, [location.search]);
};
