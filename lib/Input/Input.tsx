import { twMerge } from 'tailwind-merge';
import { input } from './Input.cva';
import { InputInterface } from './Input.types';

export const Input: InputInterface = ({
    scale,
    prefix,
    suffix,
    className,
    label,
    ...rest
}) => {
    const suffixCn = twMerge('absolute right-0 pr-2 h-3/5', `text-${scale}`);

    const preffixCn = twMerge('absolute left-0 pl-2 h-3/5', `text-${scale}`);

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
            {prefix && <div className={preffixCn}>{prefix}</div>}
            <input
                className={twMerge(
                    input({ scale }),
                    prefix ? 'pl-9' : '',
                    suffix ? 'pr-9' : ''
                )}
                {...rest}
            />
            {suffix && <div className={suffixCn}>{suffix}</div>}
        </div>
    );
};
