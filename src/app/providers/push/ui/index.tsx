import $api from '@/shared/lib/http';
import { FC, PropsWithChildren, useEffect, useState } from 'react';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { useSubscribe } from '@/shared/hooks/use-subscribe';
import { PushContext } from '../lib/push-context';

export const PushProvider: FC<PropsWithChildren> = ({ children }) => {
    const [subscribeId, setSubscribeId] = useState<string>('');

    const defaultProps = {
        subscribeId,
    };

    const PUBLIC_KEY =
        'BLpOhkXw2ZdEAAc16w-oJV3E4QoztmsKl-awkf6-bA4DYcjgXDBU2zLPE8lMqcw6P2ihgmovm-cpGW8uBirzKqg';

    const { getSubscription } = useSubscribe({ publicKey: PUBLIC_KEY });

    useEffect(() => {
        const getVisitorId = async () => {
            if (subscribeId) {
                return;
            }

            const fp = await FingerprintJS.load();
            const result = await fp.get();
            setSubscribeId(result.visitorId);
        };

        const sendSubscription = async () => {
            try {
                const subscription = await getSubscription();

                await $api.post('/subscribe', {
                    subscription: subscription,
                    id: subscribeId,
                });
                console.log('Subscribe success');
            } catch (e) {
                console.warn(e);
                console.log('Details console');
            }
        };

        getVisitorId().then(() => {
            sendSubscription();
        });
    }, [getSubscription, subscribeId]);

    return <PushContext.Provider value={defaultProps}>{children}</PushContext.Provider>;
};
