import { VariantProps } from 'class-variance-authority';
import { FC, InputHTMLAttributes } from 'react';
import { input } from './Input.cva';

export interface InputProps
    extends InputHTMLAttributes<HTMLInputElement>,
        VariantProps<typeof input> {
    icon?: React.ReactNode;
}
export interface InputInterface extends FC<InputProps> {}
