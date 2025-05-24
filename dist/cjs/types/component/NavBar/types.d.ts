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
    logo: React.ReactNode;
    links?: {
        label: string;
        href: string;
        children?: {
            label: string;
            href: string;
        }[];
    }[];
    navStyle?: NavStyle;
    position?: "fixed" | "sticky" | "absolute" | "static";
    className?: string;
    endElements?: React.ReactNode;
}
