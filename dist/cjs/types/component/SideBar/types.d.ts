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
    borderRadius?: string;
    padding?: string;
    width?: string;
}
export interface SidebarItemStyle {
    wrapperStyle?: React.CSSProperties;
    headerStyle?: React.CSSProperties;
    iconStyle?: React.CSSProperties;
    titleStyle?: React.CSSProperties;
    expandIconStyle?: React.CSSProperties;
    subItemLinkStyle?: React.CSSProperties;
    subTitleStyle?: React.CSSProperties;
}
export interface SidebarItemProps {
    item: SidebarItemConfig;
    isOpen: boolean;
    itemStyle?: SidebarItemStyle;
}
export interface SideBarProps {
    logo?: React.ReactNode;
    sidebarConfig?: SidebarItemConfig[];
    side?: "left" | "right";
    hamburgerStyle?: CSSProperties;
    hamburgerFill?: string;
    className?: string;
    sideBarStyle?: SideBarStyle;
    navBarStyle?: CSSProperties;
    footerContent?: React.ReactNode;
    itemStyle?: SidebarItemStyle;
}
