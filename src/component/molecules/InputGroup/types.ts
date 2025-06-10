import React from "react";
import { InputProps } from "../../atoms/Input/types";
import { LabelProps } from "../../atoms/Label/types";
import { TooltipProps } from "../../atoms/Tooltip/types";

export interface InputGroupProps extends Omit<InputProps, "className"> {
  /** Label text for the input */
  label: React.ReactNode;
  /** Optional props for the label */
  labelProps?: Partial<LabelProps>;
  /** Optional props for the tooltip (for info/help) */
  tooltipProps?: Partial<TooltipProps>;
  /** Optional help text or error text below the input */
  helpText?: React.ReactNode;
  /** Show error status */
  error?: boolean;
  /** Children before the input (e.g. ActionIcon, Button) */
  leftSlot?: React.ReactNode;
  /** Children after the input (e.g. ActionIcon, Button) */
  rightSlot?: React.ReactNode;
  /** Extra className for the group */
  className?: string;
}
