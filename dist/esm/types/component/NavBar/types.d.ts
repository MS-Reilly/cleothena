export type NavItem = {
    label: string;
    href: string;
    children?: NavItem[];
};
export interface NavbarProps {
    logo?: React.ReactNode;
    links: NavItem[];
    linkColor?: string;
    linkHoverColor?: string;
    activeLinkColor?: string;
    position?: 'static' | 'fixed' | 'sticky';
    theme?: 'light' | 'dark';
    className?: string;
    ghost?: boolean;
    sidebarProps?: Omit<SideBarProps, "sidebarConfig" | "logo">;
}
