import React, { FC } from 'react';

interface MainPageProps {
    className?: string;
    children?: React.ReactNode;
}

const MainPage: FC<MainPageProps> = () => {
    return (
        <div>
            main
        </div>
    );
};

export default MainPage;
