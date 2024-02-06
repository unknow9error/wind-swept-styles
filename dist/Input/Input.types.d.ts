import { VariantProps } from 'class-variance-authority';
import { FC, InputHTMLAttributes } from 'react';
import { input } from './Input.cva';
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix'>, VariantProps<typeof input> {
    prefix?: JSX.Element | React.ReactNode;
    suffix?: JSX.Element | React.ReactNode;
}
export interface InputInterface extends FC<InputProps> {
}
