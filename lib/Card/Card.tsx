import { twMerge } from 'tailwind-merge';
import { CardInterface } from './Card.types';

export const Card: CardInterface = ({ className, ...rest }) => {
    return (
        <div className={twMerge('shadow-md p-5 bg-white rounded-sm', className)} {...rest}></div>
    );
};
