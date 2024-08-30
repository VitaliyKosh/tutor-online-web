import React, { FC } from 'react';

interface MainPageProps {
    className?: string;
    children?: React.ReactNode;
}

const MainPage: FC<MainPageProps> = () => {
    console.log(import.meta.env);
    
    return (
        <div>
            {APP_VERSION} {import.meta.env.VITE_API_URL}
        </div>
    );
};

export default MainPage;
