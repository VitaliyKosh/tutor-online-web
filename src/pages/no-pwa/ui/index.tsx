import React, { FC } from 'react';

interface MainPageProps {
    className?: string;
    children?: React.ReactNode;
}

const NoPWAPage: FC<MainPageProps> = () => {
    return (
        <div>
            no pwa
        </div>
    );
};

export default NoPWAPage;
