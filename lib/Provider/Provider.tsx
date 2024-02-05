import { Context } from '../context';
import { StyleProviderInterface } from './Provider.types';

export const StyleProvider: StyleProviderInterface = ({
    children,
    ...rest
}) => {
    return <Context.Provider value={rest}>{children}</Context.Provider>;
};
