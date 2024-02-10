import { twMerge } from 'tailwind-merge';
import { buttonStyles } from './Button.cva';
import { ButtonInterface } from './Button.types';

export const Button: ButtonInterface = ({
    variant,
    size,
    className,
    ...props
}) => {
    return (
        <button
            {...props}
            className={twMerge(buttonStyles({ variant, size }), className)}
        />
    );
};
