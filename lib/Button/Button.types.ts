import { VariantProps } from 'class-variance-authority';
import { ComponentProps, FC } from 'react';
import { buttonStyles } from './Button.cva';

export type ButtonProps = VariantProps<typeof buttonStyles> &
    ComponentProps<'button'>;
export interface ButtonInterface extends FC<ButtonProps> {}
