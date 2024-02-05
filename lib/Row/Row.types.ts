import { FC, PropsWithChildren } from 'react';

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
    span?: string;
}

export interface RowInterface extends FC<PropsWithChildren<RowProps>> {}
