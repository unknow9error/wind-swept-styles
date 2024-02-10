import { FC } from 'react';

export interface SelectOption {
    label?: React.ReactNode;
    value?: string;
    key?: React.Key;
}
export interface SelectProps {
    label?: string;
    options?: SelectOption[];
    onChange?: (value?: string) => void;
}
export interface SelectInterface extends FC<SelectProps> {}
