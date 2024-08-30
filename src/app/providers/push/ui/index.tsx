import { FC, PropsWithChildren, useEffect } from 'react';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { useSubscribe } from '@/shared/hooks/use-subscribe';
import PushService from '@/shared/api-services/push-service';

const getDeviceId = async () => {
    const fp = await FingerprintJS.load();
    const result = await fp.get();
    return result.visitorId;
};

export const PushProvider: FC<PropsWithChildren> = ({ children }) => {
    const PUBLIC_KEY =
        'BLpOhkXw2ZdEAAc16w-oJV3E4QoztmsKl-awkf6-bA4DYcjgXDBU2zLPE8lMqcw6P2ihgmovm-cpGW8uBirzKqg';

    const { getSubscription } = useSubscribe({ publicKey: PUBLIC_KEY });

    useEffect(() => {
        (async () => {
            const sendSubscription = async (deviceId: string) => {
                try {
                    const subscription = await getSubscription();

                    PushService.subscribe({
                        subscription: subscription,
                        deviceId: deviceId,
                    });
                    console.log('Subscribe success');
                } catch (e) {
                    console.warn(e);
                    console.log('Details console');
                }
            };

            const deviceId = await getDeviceId();

            sendSubscription(deviceId);
        })();
    }, [getSubscription]);

    return <>{children}</>;
};
