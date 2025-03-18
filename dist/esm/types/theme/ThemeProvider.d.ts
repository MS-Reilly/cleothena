import React from 'react';
import { theme as defaultTheme } from './style/theme';
export declare const ThemeContext: React.Context<{
    colors: {
        primary: string;
        secondary: string;
        accent: string;
        highlight: string;
        neutral: {
            white: string;
            black: string;
            gray: string;
        };
        disabledBg: string;
        disabledText: string;
        disabledBorder: string;
    };
    typography: {
        fontFamily: string;
        fontSizeBase: string;
        fontSizeLg: string;
        headings: {
            h1: string;
            h2: string;
            h3: string;
        };
    };
    borders: {
        radiusXs: string;
        radiusSm: string;
        radiusMd: string;
        radiusLg: string;
    };
    shadows: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
}>;
export declare const ThemeProvider: React.FC<{
    children: React.ReactNode;
    theme?: Partial<typeof defaultTheme>;
}>;
