import { twMerge } from 'tailwind-merge';
import { ColInterface } from './Col.types';

export const Col: ColInterface = ({
    children,
    span,
    offset,
    className,
    ...props
}) => {
    const colClass = twMerge(
        span ? `col-span-${span}` : '',
        offset ? `` : '',
        className
    );

    return (
        <div className={colClass} {...props}>
            {children}
        </div>
    );
};
