import { useSignOut } from '@/shared/store/slices/user';
import { PC } from '@/shared/types/page';
import { Text } from '@/shared/ui/text';
import { TestList } from '@/shared/ui/test-list';
import { SubTest } from 'tutor-online-global-shared';
import s from './index.module.css';
import TestService from '@/shared/api-services/test-service';
import { useEffect, useState } from 'react';
import { Gap } from '@/shared/ui/gap';
import { info } from '@/shared/lib/info';
import { counter } from '@/core/app';

const MainPage: PC = () => {
    const { signOut } = useSignOut();
    const [activeTests, setActiveTests] = useState<SubTest[]>([]);
    const [resolvedTests, setResolvedTests] = useState<SubTest[]>([]);
    const [testsLoading, setTestsLoading] = useState<boolean>(true);
    const counterValue = counter.useCounter();
    const counterValue2 = counter.useCounter2();

    const getUserActiveTests = async () => {
        try {
            const res = await TestService.getUserActiveTests();
            setActiveTests(res.data.activeTests);
            setResolvedTests(res.data.resolvedTests);
        } finally {
            setTestsLoading(false);
        }
    };

    useEffect(() => {
        getUserActiveTests();
    }, []);

    return (
        <div className={s.page}>
            <Text textType='title' textSize={'s'}>
                Тесты
            </Text>
            <Gap size={'m'} />
            <div className={s.tests}>
                <Text textType='title' textSize={'xs'}>
                    Активные
                </Text>
                <Gap size={'m'} />
                <TestList tests={activeTests} skeletonCount={2} testsLoading={testsLoading} />
                <Gap size={'l'} />
                <Text textType='title' textSize={'xs'}>
                    Последние
                </Text>
                <Gap size={'m'} />
                <TestList tests={resolvedTests} skeletonCount={2} testsLoading={testsLoading} />
            </div>
            <button onClick={() => info.showInfoBlock()}>dev</button>
            <Gap size={'xl'} />
            <div>{counterValue}</div>
            <div>{counterValue2}</div>
        </div>
    );
};

export default MainPage;
