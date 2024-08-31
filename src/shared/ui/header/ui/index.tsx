import s from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Text } from '@/shared/ui/text';

export interface Props {
    text: string;
    onBackButtonClick: () => void;
    showBackButton: boolean;
}

export const Header = ({ showBackButton, text, onBackButtonClick }: Props) => {
    return (
        <div className={s.header}>
            {showBackButton && (
                <button className={s.backButton} onClick={onBackButtonClick}>
                    <FontAwesomeIcon className={s.backButtonIcon} icon={faChevronLeft} />
                </button>
            )}
            <div className={s.headerTitle} data-testid='header-title'>
                <Text textType='title' textSize={'m'} textColor='primary'>
                    {text}
                </Text>
            </div>
        </div>
    );
};
