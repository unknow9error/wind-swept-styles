import { FC, PropsWithChildren } from 'react';
import { ComponentName } from '../types';
export interface ProviderConfig {
}
export interface ProviderLocalization {
    locales?: Record<string, string>;
}
export interface ThemeConfig {
    text?: string;
    background?: string;
}
export type ProviderThemeComponent = ComponentName | 'global';
export type ProviderTheme = Record<ProviderThemeComponent, ThemeConfig>;
export interface StyleProviderProps {
    theme?: string;
    config?: ProviderConfig;
    localization?: ProviderLocalization;
}
export interface StyleProviderInterface extends FC<PropsWithChildren<StyleProviderProps>> {
}
