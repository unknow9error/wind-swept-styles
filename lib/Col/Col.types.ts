import { FC, PropsWithChildren } from 'react';

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
    span?: number;
    offset?: number;
}

export interface ColInterface extends FC<PropsWithChildren<ColProps>> {}
