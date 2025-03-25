import React from 'react';
export interface Theme {
    primaryColor: string;
    secondaryColor?: string;
    fontFamily?: string;
}
export interface ThemeProviderProps {
    theme?: Partial<Theme>;
    children: React.ReactNode;
}
