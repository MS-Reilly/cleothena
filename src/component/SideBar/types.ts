import { CSSProperties } from "react";

export interface SidebarItemConfig {
  label: string;
  href: string;
  icon?: React.ElementType;
  children?: SidebarItemConfig[];
}

export interface SideBarStyle {
  bg?: string; // Background colour
  link?: string; // Text and icon colour
  shadow?: string; // Box shadow
  borderRadius?: string; // Optional border radius
  padding?: string; // Optional padding inside
  width?: string; // Width of sidebar
}

export interface SideBarProps {
  logo?: React.ReactNode;
  sidebarConfig?: SidebarItemConfig[];
  side?: "left" | "right";
  hamburgerStyle?: CSSProperties;
  hamburgerFill?: string;
  className?: string;
  sideBarStyle?: SideBarStyle;
  navBarStyle?: CSSProperties; // ✅ Add this
  footerContent?: React.ReactNode;
}
