import { CSSProperties } from "react";
export interface SidebarItemConfig {
    label: string;
    href: string;
    icon?: React.ElementType;
    children?: SidebarItemConfig[];
}
export interface SideBarStyle {
    bg?: string;
    link?: string;
    shadow?: string;
}
export interface SideBarProps {
    logo?: React.ReactNode;
    sidebarConfig?: SidebarItemConfig[];
    side?: "left" | "right";
    hamburgerStyle?: CSSProperties;
    hamburgerFill?: string;
    className?: string;
    sideBarStyle?: SideBarStyle;
    footerContent?: React.ReactNode;
}
