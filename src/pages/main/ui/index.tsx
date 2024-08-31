import { PC } from '@/shared/types/page';

const MainPage: PC = ({ useHeaderTitle }) => {
    useHeaderTitle('Виталий Кошельков');

    return (
        <div>
            {APP_VERSION} {import.meta.env.VITE_API_URL}asd
        </div>
    );
};

export default MainPage;
