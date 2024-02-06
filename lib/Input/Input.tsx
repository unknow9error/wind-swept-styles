import { twMerge } from 'tailwind-merge';
import { input } from './Input.cva';
import { InputInterface } from './Input.types';

export const Input: InputInterface = ({
    scale,
    prefix,
    suffix,
    className,
    ...rest
}) => {
    return (
        <div
            className={twMerge(
                'relative',
                'h-full',
                'flex',
                'items-center',
                className
            )}
        >
            {prefix && <div className="absolute left-0 pl-2">{prefix}</div>}
            <input
                className={twMerge(
                    input({ scale }),
                    prefix ? 'pl-9' : '',
                    suffix ? 'pr-9' : ''
                )}
                {...rest}
            />
            {suffix && (
                <div
                    className={twMerge(
                        'absolute right-0 pr-2',
                        `text-${scale}`
                    )}
                >
                    {suffix}
                </div>
            )}
        </div>
    );
};
