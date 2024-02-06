import { twMerge } from 'tailwind-merge';
import { RowInterface } from './Row.types';

export const Row: RowInterface = ({
    children,
    gutter = 0,
    justify = 'start',
    align = 'stretch',
    cols,
    className,
    ...props
}) => {
    const rowClass = twMerge(
        'grid',
        'w-full',
        gutter ? `gap-${gutter}` : '',
        'grid-cols-1',
        cols ? `sm:grid-cols-${cols}` : '',
        justify ? `justify-${justify}` : '',
        align ? `items-${align}` : '',
        className
    );

    return (
        <div className={rowClass} {...props}>
            {children}
        </div>
    );
};
