import { FC, useCallback, useEffect, useState } from 'react';
import classes from './NotificationsPage.module.css';
import MenuButton from '@/shared/ui/menu/MenuButton/MenuButton';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { useSubscribe } from '@/shared/hooks/use-subscribe';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import $api from '@/shared/lib/http';

interface NotificationsPageProps {
    className?: string;
}

const NotificationsPage: FC<NotificationsPageProps> = (props) => {
    const [, setLoadingSubscribe] = useState<boolean>(false);
    const [, setLoadingPush] = useState<boolean>(false);
    const [pushId, setPushId] = useState<string>('');
    const [message] = useState<string>('World');
    const [title] = useState<string>('Hello');
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
        setLoadingSubscribe(true);
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
            setError(e as any);
        } finally {
            setLoadingSubscribe(false);
        }
    }, [getSubscription]);

    const onSubmitPush = useCallback(async () => {
        setLoadingPush(true);
        try {
            await $api.post('/send', {
                message,
                title,
                id: pushId,
            });
            console.log('Push success');
        } catch (e) {
            console.log('Details console');
            setError(e as any);
        } finally {
            setLoadingPush(false);
        }
    }, [pushId, message, title]);

    return (
        <div className={[props.className, classes.viewPage].join(' ')}>
            <MenuButton text={'onSubmitSubscribe'} onClick={onSubmitSubscribe} icon={faBell} />
            <MenuButton text={'onSubmitPush'} onClick={onSubmitPush} icon={faBell} />
            {error && (error as any).message}
        </div>
    );
};

export default NotificationsPage;
