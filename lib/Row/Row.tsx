import clsx from 'clsx';
import { RowInterface } from './Row.types';

export const Row: RowInterface = ({ children, className, ...rest }) => {
    return (
        <div className={clsx(className, 'w-6 h-6 bg-black')} {...rest}>
            {children}
        </div>
    );
};
