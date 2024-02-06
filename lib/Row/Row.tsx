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
        gutter ? `gap-${gutter}` : '',
        cols ? `grid-cols-${cols}` : '',
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
