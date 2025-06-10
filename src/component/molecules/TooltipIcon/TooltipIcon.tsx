import React from "react";
import styles from "./TooltipIcon.module.scss";
import { TooltipIconProps } from "./types";
import { Tooltip, ActionIcon } from "../../atoms";

const TooltipIcon: React.FC<TooltipIconProps> = ({
  iconName,
  tooltipProps,
  iconProps,
  className = "",
}) => (
  <Tooltip {...tooltipProps}>
    <span className={`${styles.tooltipIcon} ${className}`}>
      <ActionIcon iconName={iconName} {...iconProps} />
    </span>
  </Tooltip>
);

export default TooltipIcon;
