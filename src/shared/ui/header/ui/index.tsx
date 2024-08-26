import classNames from 'classnames';
import s from './index.module.css';

export interface Props {
    className?: string;
    text?: string;
    onBackButtonClick?: () => void;
}

export const Header = ({ className, text, onBackButtonClick }: Props) => {
    return (
        <div className={classNames(s.header, className)}>
            <div className={classNames(s.headerTitleBlock, className)}>
                <button
                    className={s.backButton}
                    onClick={onBackButtonClick}
                    data-testid='back-button'
                >
                    {/* <Icon
                        icon={Icons.HEADER_ARROW}
                        className={s.arrowLeft}
                        data-testid='header-left-arrow'
                    /> */}
                </button>
                <div className={s.headerTitle} data-testid='header-title'>
                    {text}
                </div>
            </div>
        </div>
    );
};
