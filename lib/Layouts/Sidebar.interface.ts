import { FC, PropsWithChildren } from 'react';

export interface SidebarBetaTag {
    title?: string;
    content?: string;
    visible?: boolean;
    onClose?: () => void;
}

export interface SidebarItem {
    key?: React.Key;
    title: string;
    link?: string;
    icon?: React.ReactNode;
    rightContent?: React.ReactNode;
}

export interface SidebarProps {
    logo?: React.ReactNode;
    activeKey?: string;
    nav?: React.ReactNode;
    beta?: SidebarBetaTag;
    items: SidebarItem[];
}

export interface SidebarInterface extends FC<PropsWithChildren<SidebarProps>> {
    // Content: SidebarContentInterface;
}

export interface SidebarContentInterface extends FC<SidebarContentProps> {}

export interface SidebarContentProps {}
