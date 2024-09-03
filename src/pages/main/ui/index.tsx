import { RouteNames } from '@/shared/consts/paths';
import { info } from '@/shared/lib/info';
import { paths } from '@/shared/lib/path';
import { useSignOut } from '@/shared/store/slices/user';
import { PC } from '@/shared/types/page';
import { Link } from 'react-router-dom';

const MainPage: PC = ({ useHeaderTitle }) => {
    const { signOut } = useSignOut();
    useHeaderTitle('Виталий Кошельков');

    return (
        <div>
            <Link to={paths.getRoutePath(RouteNames.SDUI)}>
                <button>go to SDUI</button>
            </Link>
            <input type='text' />

            <button onClick={signOut}>signOutAction</button>
            <div>
                <button
                    onClick={() =>
                        info.log({ a: 'hello fdjghdfjklsgh dklfjsgh kdlsjghdklsjghsdlk ghsdklgd' })
                    }
                >
                    {' '}
                    info.log('hello');
                </button>
            </div>
            <div>
                <button onClick={() => info.logValue('easd2', 'sad')}>
                    {' '}
                    info.log('he3213e21312llo');
                </button>
            </div>
            <div>
                <button onClick={() => info.showInfoBlock()}> showInfoBlock</button>
            </div>
            <div>
                <button onClick={() => info.hideInfoBlock()}>hideInfoBlock</button>
            </div>
        </div>
    );
};

export default MainPage;
