import React from "react";
import { TooltipProps } from "../../atoms/Tooltip/types";
import { ActionIconProps } from "../../atoms/ActionIcon/types";

export interface TooltipIconProps {
  /** The icon name to show (required) */
  iconName: string;
  /** Props for the tooltip (all Tooltip props supported) */
  tooltipProps: TooltipProps;
  /** Props for the ActionIcon (optional, for size/color etc) */
  iconProps?: Omit<ActionIconProps, "iconName">;
  /** Extra className */
  className?: string;
}
