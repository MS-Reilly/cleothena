// types.ts
import { MouseEventHandler } from "react";

export type ActionIconColors = Partial<{
  /** Color of the SVG icon */
  iconColor: string;
  /** Button background color */
  backgroundColor: string;
  /** Button border color */
  borderColor: string;
}>;

export interface ActionIconProps {
  /** SVG icon component to render */
  iconName: string;
  /** Override for width/height (in px) */
  size?: number;
  /** Additional CSS class name(s) */
  className?: string;
  /** Override for border radius (e.g. "4px") */
  borderRadius?: string;
  /** Color overrides */
  colors?: ActionIconColors;
  /** Click handler */
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
