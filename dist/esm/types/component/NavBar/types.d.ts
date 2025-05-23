export type NavItem = {
    label: string;
    href: string;
    icon?: React.ReactNode;
    children?: NavItem[];
};
/** Design-tokens for a single Navbar instance (all optional) */
export interface NavStyle {
    bg?: string;
    link?: string;
    linkHover?: string;
    linkActive?: string;
    /** NEW — colour for items inside dropdowns */
    subLink?: string;
    subLinkHover?: string;
}
export interface NavbarProps {
    logo?: React.ReactNode;
    links: NavItem[];
    /** Unified styling object (preferred and only way to theme) */
    navStyle?: NavStyle;
    position?: "static" | "fixed" | "sticky";
    theme?: "light" | "dark";
    className?: string;
    ghost?: boolean;
    sidebarProps?: Omit<SideBarProps, "sidebarConfig" | "logo">;
}
