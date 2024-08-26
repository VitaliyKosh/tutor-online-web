import $api from '@/shared/lib/http';
import React, { FC, useCallback, useEffect, useState } from 'react';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { useSubscribe } from '@/shared/hooks/use-subscribe';

interface MainPageProps {
    className?: string;
    children?: React.ReactNode;
}

const MainPage: FC<MainPageProps> = () => {
    const [pushId, setPushId] = useState<string>('');
    const [subscribeId, setSubscribeId] = useState<string>('');

    const [error, setError] = useState<object>();

    const PUBLIC_KEY =
        'BLpOhkXw2ZdEAAc16w-oJV3E4QoztmsKl-awkf6-bA4DYcjgXDBU2zLPE8lMqcw6P2ihgmovm-cpGW8uBirzKqg';

    const { getSubscription } = useSubscribe({ publicKey: PUBLIC_KEY });

    useEffect(() => {
        FingerprintJS.load()
            .then((fp) => fp.get())
            .then((result) => {
                setSubscribeId(result.visitorId);
                setPushId(result.visitorId);
            });
    }, []);

    const onSubmitSubscribe = useCallback(async () => {
        console.log(1);
        try {
            const subscription = await getSubscription();

            console.log(subscription);

            await $api.post('/subscribe', {
                subscription: subscription,
                id: subscribeId,
            });
            console.log('Subscribe success');
        } catch (e) {
            console.warn(e);
            console.log('Details console');
            setError(e as any);
        } finally {
            console.log('finally');
        }
    }, [getSubscription]);

    const onSubmitPush = useCallback(async () => {
        try {
            await $api.post('/send', {
                message: 'm',
                title: 't',
                id: pushId,
            });
            console.log('Push success');
        } catch (e) {
            console.log('Details console');
            setError(e as any);
        }
    }, [pushId]);

    return (
        <div>
            <button onClick={onSubmitSubscribe}>onSubmitSubscribe</button>
            <button onClick={onSubmitPush}>onSubmitPush</button>
            {error && (error as any).message}
        </div>
    );
};

export default MainPage;
