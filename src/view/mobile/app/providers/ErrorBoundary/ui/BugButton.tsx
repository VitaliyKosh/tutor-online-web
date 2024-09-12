import { FC, useEffect, useState } from 'react';
import Button from '@/view/mobile/components/ui/button';

interface BugButtonProps {
    className?: string;
    children?: React.ReactNode;
}

export const BugButton: FC<BugButtonProps> = (props) => {
    const { className, children, ...otherProps } = props;

    const [error, setError] = useState(false);

    const throwError = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button textSize={'s'} onClick={throwError} {...otherProps}>
            {'Throw Error'}
        </Button>
    );
};
