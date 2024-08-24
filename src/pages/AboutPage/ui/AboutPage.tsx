import React, { type FC } from 'react';
import classes from './AboutPage.module.css';

interface AboutPageProps {
    className?: string;
    children?: React.ReactNode;
}

const AboutPage: FC<AboutPageProps> = () => {
    return <div className={classes.aboutPage}>fdsfas</div>;
};

export default AboutPage;
