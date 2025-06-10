export interface TooltipColorSet {
  backgroundColor?: string;
  textColor?: string;
}

export interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  delay?: number;
  disabled?: boolean;
  colors?: TooltipColorSet;
}
