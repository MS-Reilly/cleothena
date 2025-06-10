import React from "react";
import { ToggleSwitchProps } from "../../atoms/ToggleSwitch/types";
import { TooltipProps } from "../../atoms/Tooltip/types";
import { LabelProps } from "../../atoms/Label/types";

export interface ToggleFieldProps extends Omit<ToggleSwitchProps, "className"> {
  /** Main label text */
  label: React.ReactNode;
  /** Extra label props */
  labelProps?: Partial<LabelProps>;
  /** Optional help text */
  helpText?: React.ReactNode;
  /** Optional Tooltip, pass any props for Tooltip here */
  tooltipProps?: Partial<TooltipProps>;
  /** Optional extra class */
  className?: string;
  /** Label placement ('left' or 'right', default: 'left') */
  labelPosition?: "left" | "right";
}
