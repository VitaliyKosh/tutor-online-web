import { PC } from '@/view/mobile/shared/types/page';
import { Text } from '@/view/mobile/components/ui/text';
import { TestList } from '@/view/mobile/components/ui/test-list';
import s from './index.module.css';
import { Gap } from '@/view/mobile/components/ui/gap';
import { PullToRefreshContainer } from '@/view/mobile/components/layout/pull-to-refresh-container';
import { auth, test } from '@/core/app';
import { useLoader } from '@/view/mobile/shared/hooks/use-loader';
import Button from '@/view/mobile/components/ui/button';
import { info } from '@/view/mobile/shared/lib/info';

const loadUserActiveTests = () => test.loadUserActiveTests();

const MainPage: PC = () => {
    const activeTests = test.useActiveTests();
    const resolvedTests = test.useResolvedTests();

    const { load, isLoading } = useLoader(loadUserActiveTests, { autoLoad: true });

    const onRefresh = async () => {
        return await load();
    };

    return (
        <PullToRefreshContainer onRefresh={onRefresh} className={s.page}>
            <div>
                <Text textType='title' textSize={'s'}>
                    Тесты
                </Text>
                <Gap size={'m'} />
                <div className={s.tests}>
                    <Text textType='title' textSize={'xs'}>
                        Активные
                    </Text>
                    <Gap size={'m'} />
                    <TestList tests={activeTests} skeletonCount={2} testsLoading={isLoading} />
                    <Gap size={'l'} />
                    <Text textType='title' textSize={'xs'}>
                        Последние
                    </Text>
                    <Gap size={'m'} />
                    <TestList tests={resolvedTests} skeletonCount={2} testsLoading={isLoading} />
                </div>
                <Button onClick={() => auth.signOut()} textSize={'s'}>
                    signOut
                </Button>
                <Button
                    onClick={() => {
                        info.log('Notification in window', 'Notification' in window);

                        if ('Notification' in window) {
                            Notification.requestPermission()
                                .then((permission) => {
                                    if (permission === 'granted') {
                                        info.log('Разрешение на уведомления получено.');
                                        // Здесь можно зарегистрировать Service Worker
                                    } else {
                                        info.log('Разрешение на уведомления не получено.');
                                    }
                                })
                                .catch((error) => {
                                    info.log(
                                        'Ошибка при запросе разрешения на уведомления:',
                                        error,
                                    );
                                });
                        } else {
                            info.log('Ваш браузер не поддерживает уведомления.');
                        }
                    }}
                    textSize={'s'}
                >
                    Notification
                </Button>
            </div>
        </PullToRefreshContainer>
    );
};

export default MainPage;
