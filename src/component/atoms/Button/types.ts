// types.ts
import {
  MouseEventHandler,
  ComponentType,
  SVGProps,
  ButtonHTMLAttributes,
} from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "text"
  | "success"
  | "info"
  | "warning";

export interface ButtonColors {
  /** Button background color */
  backgroundColor?: string;
  /** Button text color */
  textColor?: string;
  /** Icon color */
  iconColor?: string;
  /** Hover background/text/icon color */
  hoverColor?: string;
}

export interface ButtonSizeProps {
  /** Explicit button width (e.g. "100px", "auto") */
  buttonWidth?: string | number;
  /** Explicit icon size in px */
  iconSize?: number;
}

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  /** Click handler */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  /** Button HTML type */
  type?: "button" | "submit" | "reset";
  /** Disabled state */
  disabled?: boolean;
  /** Visual variant */
  variant?: ButtonVariant;
  /** Optional SVG icon component */
  iconName: string;
  /** Icon position relative to text */
  iconPosition?: "left" | "right";
  /** Button label */
  text?: string;
  /** Override color tokens */
  colors?: ButtonColors;
  /** Override size tokens */
  size?: ButtonSizeProps;
  /** Additional CSS class names */
  className?: string;
}
