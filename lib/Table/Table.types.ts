import { FC } from 'react';

export interface TableColumn<Data = any, Key = string> {
    key?: React.Key;
    dataIndex?: Key;
    title: string;
    render?: (value: any, data: Data, index: number) => void;
}
export enum TableType {
    Remote = 'remote',
    Local = 'local',
}
export interface TableProps<T extends Array<object>> {
    dataSource: T;
    columns: TableColumn<T, T extends Array<infer P> ? keyof P : string>[];
    type?: TableType;
}

export interface TableInterface<T extends object[] = any>
    extends FC<TableProps<T>> {}
