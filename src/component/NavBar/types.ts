export type NavItem = {
    label: string;
    href: string;
    children?: NavItem[];
  };
  
  export interface NavbarProps {
    logo?: React.ReactNode;
    links: NavItem[];
    position?: 'static' | 'fixed' | 'sticky';
    theme?: 'light' | 'dark';
    className?: string;
    ghost?: boolean; // ✅ Ghost variant
    sideBarSide?: 'left' | 'right';
  }
  