import { twMerge } from 'tailwind-merge';
import { ColInterface } from './Col.types';

export const Col: ColInterface = ({ children, span, className, ...props }) => {
    const colClass = twMerge(
        'col-span-1',
        'col-span-2',
        'col-span-3',
        'col-span-4',
        'col-span-5',
        'col-span-6',
        'col-span-7',
        'col-span-8',
        'col-span-9',
        'col-span-10',
        'col-span-11',
        'col-span-12',
        'w-full',
        span ? `col-span-${span}` : '',
        className
    );

    return (
        <div className={colClass} {...props}>
            {children}
        </div>
    );
};
