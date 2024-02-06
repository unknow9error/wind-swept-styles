import { cva } from 'class-variance-authority';

export const input = cva(
    [
        'p-3 border-gray-300 border shadow-md text-sm w-full',
        'hover:border-blue-500 hover:border',
        'focus:border-blue-500 focus:border focus:outline-none',
    ],
    {
        variants: {
            scale: {
                sm: 'h-7 rounded-md',
                md: 'h-9 rounded-lg',
                lg: 'h-12 rounded-xl',
            },
        },
        defaultVariants: {
            scale: 'md',
        },
    }
);
