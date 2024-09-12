import { FC } from 'react';
import classes from './NoActivatePage.module.css';

interface NoActivatePageProps {
    className?: string;
}

const NoActivatePage: FC<NoActivatePageProps> = () => {
    return (
        <div className={classes.noActivatePage}>
            <div className={classes.noActivatePageBg} />
            <div className={classes.noActivatePageContainer}>
                <div className={classes.text}>Ожидайте подтверждение от администратора</div>
                <div className={classes.sendAgain}>Отправить уведомление повторно</div>
                {/* <Button onClick={logout}>Выйти</Button> */}
            </div>
        </div>
    );
};

export default NoActivatePage;
