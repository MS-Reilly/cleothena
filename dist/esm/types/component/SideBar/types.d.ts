export interface SideBarProps {
    logo: string;
    sidebarConfig?: SidebarSectionConfig[];
    side?: "left" | "right";
    hamburgerStyle?: React.CSSProperties;
    hamburgerFill?: string;
}
export interface SidebarSectionConfig {
    section: string;
    items: SidebarItemConfig[];
    [key: string]: any;
}
export interface SidebarItemConfig {
    title: string;
    path?: string;
    icon?: React.ReactNode;
    disabled?: boolean;
    color?: string;
    subItems?: SidebarItemConfig[];
    [key: string]: any;
}
