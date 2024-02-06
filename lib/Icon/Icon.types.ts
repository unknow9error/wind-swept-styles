import { FC } from 'react';
import { icons } from '../utils';

export interface IconProps {
    name: keyof typeof icons | React.ReactNode;
}
export interface IconInterface extends FC<IconProps> {}
