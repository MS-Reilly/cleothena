// types.ts  (or wherever you keep it)
export type NavItem = {
  label: string;
  href: string;
  icon?: React.ReactNode; // ← NEW, optional
  children?: NavItem[];
};

/** Design-tokens for a single Navbar instance (all optional) */
// types.ts
export interface NavStyle {
  bg?: string;
  link?: string;
  linkHover?: string;
  linkActive?: string;

  /** NEW — colour for items inside dropdowns */
  subLink?: string;
  subLinkHover?: string;
  // (add subLinkHover if you ever need it)
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
