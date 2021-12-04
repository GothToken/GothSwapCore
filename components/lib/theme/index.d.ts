import React from 'react';
import { DefaultTheme } from 'styled-components';
import { Colors } from './styled';
export declare const defaultColors: Colors;
export declare const defaultTheme: DefaultTheme;
declare type ThemeProviderProps = {
    children: React.ReactNode;
    theme?: DefaultTheme;
};
export default function ThemeProvider({ children, theme }: ThemeProviderProps): JSX.Element;
export {};
