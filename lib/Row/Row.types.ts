import { FC, PropsWithChildren } from 'react';

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
    gutter?: number;
    cols?: number;
    justify?: 'start' | 'end' | 'center' | 'between' | 'around';
    align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline';
}

export interface RowInterface extends FC<PropsWithChildren<RowProps>> {}
