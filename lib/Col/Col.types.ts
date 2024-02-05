import { FC, PropsWithChildren } from 'react';

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
    span?: string;
}

export interface ColInterface extends FC<PropsWithChildren<ColProps>> {}
