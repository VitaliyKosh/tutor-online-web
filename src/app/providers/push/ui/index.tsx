import { FC, PropsWithChildren, useEffect, useState } from 'react';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { useSubscribe } from '@/shared/hooks/use-subscribe';
import PushService from '@/shared/api-services/push-service';
import { useAppSelector } from '@/shared/hooks/use-app-selector';
import { UserAuthStatus } from '@/shared/store/slices/user/types';

const getDeviceId = async () => {
    const fp = await FingerprintJS.load();
    const result = await fp.get();
    return result.visitorId;
};

const SHOW_ALERTS = false;

const PUBLIC_KEY =
    'BLpOhkXw2ZdEAAc16w-oJV3E4QoztmsKl-awkf6-bA4DYcjgXDBU2zLPE8lMqcw6P2ihgmovm-cpGW8uBirzKqg';

export const PushProvider: FC<PropsWithChildren> = ({ children }) => {
    const { getSubscription } = useSubscribe({ publicKey: PUBLIC_KEY });
    const authStatus = useAppSelector((s) => s.user.authStatus);
    const [canSubscribe, setCanSubscribe] = useState<boolean>(false);
    const [subscribed, setSubscribed] = useState(false);

    useEffect(() => {
        const subscribe = async () => {
            if (SHOW_ALERTS) {
                alert('sendSubscription');
            }

            try {
                const subscription = await getSubscription();
                const deviceId = await getDeviceId();

                await PushService.subscribe({
                    subscription: subscription,
                    deviceId: deviceId,
                });

                setSubscribed(true);
            } catch (e) {
                if (SHOW_ALERTS) {
                    alert('subscription error');
                }
                console.warn(e);
            }
        };

        const onUserAction = async () => {
            if (subscribed) {
                return;
            }

            setCanSubscribe(true);

            subscribe();
        };

        const clearListener = () => {
            if (SHOW_ALERTS) {
                alert('removeEventListener return');
            }
            document.removeEventListener('click', onUserAction);
        };

        if (subscribed) {
            clearListener();
        } else if (authStatus === UserAuthStatus.SIGN_IN) {
            if (SHOW_ALERTS) {
                alert('addEventListener');
            }
            document.addEventListener('click', onUserAction);
            subscribe();
        }

        return clearListener;
    }, [subscribed, authStatus, canSubscribe, getSubscription]);

    return <>{children}</>;
};
