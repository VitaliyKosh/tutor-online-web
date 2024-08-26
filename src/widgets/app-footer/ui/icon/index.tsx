import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import s from './index.module.css';

interface Props {
    icon: IconDefinition;
}

export const AppFooterIcon = ({ icon }: Props) => {
    return <FontAwesomeIcon className={s.icon} icon={icon} />;
};
