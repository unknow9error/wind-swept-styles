import { input } from './Input.cva';
import { InputInterface } from './Input.types';

export const Input: InputInterface = ({ scale, icon, ...rest }) => {
    return (
        <div>
            {icon && <img />}
            <input className={input({ scale })} {...rest} />
        </div>
    );
};
