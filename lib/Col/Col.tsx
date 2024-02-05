import clsx from 'clsx';
import { ColInterface } from './Col.types';

export const Col: ColInterface = ({ children, className, ...rest }) => {
    return (
        <div className={clsx(className, '')} {...rest}>
            {children}
        </div>
    );
};
