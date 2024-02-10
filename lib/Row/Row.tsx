import { twMerge } from 'tailwind-merge';
import { RowInterface } from './Row.types';
import { useMemo } from 'react';
import clsx from 'clsx';

export const Row: RowInterface = ({
    children,
    gutter = 0,
    justify = 'start',
    align = 'stretch',
    cols,
    className,
    ...props
}) => {
    const cn = twMerge(
        clsx(
            'grid',
            'w-full',
            'gap-1',
            'gap-2',
            'gap-3',
            'gap-4',
            'gap-5',
            'gap-6',
            'gap-7',
            'gap-8',
            'gap-9',
            'gap-10',
            'gap-11',
            'gap-12',
            gutter && `gap-${gutter}`,
            'sm:grid-cols-1',
            'sm:grid-cols-2',
            'sm:grid-cols-3',
            'sm:grid-cols-4',
            'sm:grid-cols-5',
            'sm:grid-cols-6',
            'sm:grid-cols-7',
            'sm:grid-cols-8',
            'sm:grid-cols-9',
            'sm:grid-cols-10',
            'sm:grid-cols-11',
            'sm:grid-cols-12',
            cols && `sm:grid-cols-${cols}`,
            'sm:justify-center',
            'sm:justify-start',
            'sm:justify-end',
            'sm:justify-between',
            'sm:justify-between',
            'sm:justify-around',
            justify && `sm:justify-${justify}`,
            'items-start',
            'items-end',
            'items-center',
            'items-stretch',
            'items-baseline',
            align && `items-${align}`,
            className
        )
    );

    return (
        <div className={cn} {...props}>
            {children}
        </div>
    );
};
