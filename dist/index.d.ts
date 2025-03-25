import React$1 from 'react';

type ButtonVariant = 'xs' | 'sm' | 'md' | 'lg';
type ButtonColor = 'primary' | 'secondary' | 'accent' | 'highlight';
type SimpleButtonProps = {
    title: string;
    children?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    className?: string;
    disabled?: boolean;
    variant?: ButtonVariant;
    color?: ButtonColor;
    outline?: boolean;
    ghost?: boolean;
};

declare const SimpleButton: React$1.FC<SimpleButtonProps>;

type NavItem = {
    label: string;
    href: string;
    children?: NavItem[];
};
interface NavbarProps {
    logo?: React.ReactNode;
    links: NavItem[];
    position?: 'static' | 'fixed' | 'sticky';
    theme?: 'light' | 'dark';
    className?: string;
    ghost?: boolean;
    sideBarSide?: 'left' | 'right';
}

declare const Navbar: React$1.FC<NavbarProps>;

interface SideBarProps {
    logo: string;
    sidebarConfig?: SidebarSectionConfig[];
    side?: "left" | "right";
}
interface SidebarSectionConfig {
    section: string;
    items: SidebarItemConfig[];
    [key: string]: any;
}
interface SidebarItemConfig {
    title: string;
    path?: string;
    icon?: React.ReactNode;
    disabled?: boolean;
    color?: string;
    subItems?: SidebarItemConfig[];
    [key: string]: any;
}

declare const SideBar: React$1.FC<SideBarProps>;

declare const theme: {
    colors: {
        primary: string;
        secondary: string;
        accent: string;
        highlight: string;
        neutral: {
            white: string;
            black: string;
            grey: string;
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
};

declare const ThemeProvider: React$1.FC<{
    children: React$1.ReactNode;
    theme?: Partial<typeof theme>;
}>;

declare const useTheme: () => {
    colors: {
        primary: string;
        secondary: string;
        accent: string;
        highlight: string;
        neutral: {
            white: string;
            black: string;
            grey: string;
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
};

interface Theme {
    primaryColor: string;
    secondaryColor?: string;
    fontFamily?: string;
}
interface ThemeProviderProps {
    theme?: Partial<Theme>;
    children: React$1.ReactNode;
}

export { Navbar, SideBar, SimpleButton, ThemeProvider, theme, useTheme };
export type { Theme, ThemeProviderProps };
