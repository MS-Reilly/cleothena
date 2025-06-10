export interface IconCardProps {
    icon: React.ComponentType<any>;
    title: string;
    color?: string;           // Icon and text colour
    backgroundColor?: string; // ✅ NEW: Card background
    iconSize?: number;
    className?: string;
  }
  