import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import s from './index.module.css';
import classNames from 'classnames';

interface Props {
    icon: IconDefinition;
    active: boolean;
}

export const AppFooterIcon = ({ icon, active }: Props) => {
    return <FontAwesomeIcon className={classNames(s.icon, { [s.active]: active })} icon={icon} />;
};
