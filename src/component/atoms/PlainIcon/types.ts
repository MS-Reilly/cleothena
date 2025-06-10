// types.ts
import { ComponentType, SVGProps } from "react";

export interface PlainIconProps {
  /** Base name of the icon (without prefix or “fi-<set>-” or “.svg”) */
  name: string;
  /** Width & height in px */
  size?: number;
  /** CSS color for the icon wrapper (applies to SVG via currentColor) */
  color?: string;
  /** Additional wrapper CSS class names */
  className?: string;
}
