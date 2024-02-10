import { cva } from 'class-variance-authority';

export const buttonStyles = cva(
    ['flex', 'items-center', 'justify-center', 'transition-colors'],
    {
        variants: {
            variant: {
                default: ['bg-green-200', 'hover:bg-green-100'],
                hover: ['hover:bg-green-200'],
                dark: ['bg-green-900', 'hover:bg-slate-800', 'text-white'],
                gradient: [
                    'bg-gradient-to-br from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500',
                ],
                hoverBorder: [
                    'hover:border-4',
                    'rounded-full',
                    'p-2',
                    'border-black',
                ],
                border: [
                    'border-4',
                    'rounded-full',
                    'p-2',
                    'border-black',
                    'hover:bg-gradient-to-br',
                    'hover:from-indigo-500',
                    'hover:via-purple-500',
                    'hover:to-pink-500',
                ],
            },
            size: {
                default: ['rounded', 'w-20', 'h-20', 'p-2'],
                button: ['rounded', 'h-10', 'w-32'],
                icon: ['rounded-full', 'w-20', 'h-20', 'p-2.5'],
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);
