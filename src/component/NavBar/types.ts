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
  endElements?: React.ReactNode; // 👈 New prop for custom content (buttons, icons, etc.)
}
