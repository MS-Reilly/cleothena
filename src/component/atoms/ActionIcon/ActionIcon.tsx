// ActionIcon.tsx
import React, { useMemo, FC } from "react";
import { useTheme } from "../../../theme/hooks/useTheme";
import { PlainIcon } from "../../atoms";
import styles from "./ActionIcon.module.scss";
import { ActionIconProps } from "./types";

const ActionIcon: FC<ActionIconProps> = ({
  iconName,
  size,
  className = "",
  borderRadius,
  colors = {},
  onClick,
}) => {
  const theme = useTheme();
  const defaultSize = theme.buttons?.height || 40;
  const defaultRadius = theme.borders?.radiusSm || "8px";

  // Extract theme colors
  const {
    primary,
    neutral: { white },
  } = theme.colors;

  // Apply overrides or defaults
  const {
    iconColor = white,
    backgroundColor = primary,
    borderColor = "transparent",
  } = colors;

  // Compute style object
  const style = useMemo(
    () => ({
      width: size ?? defaultSize,
      height: size ?? defaultSize,
      backgroundColor,
      borderColor,
      borderRadius: borderRadius ?? defaultRadius,
      borderWidth: borderColor !== "transparent" ? 1 : 0,
      borderStyle: "solid",
    }),
    [
      size,
      defaultSize,
      backgroundColor,
      borderColor,
      borderRadius,
      defaultRadius,
    ]
  );

  return (
    <button
      type="button"
      className={`${styles.actionIcon} ${className}`}
      style={style}
      onClick={onClick}
    >
      <PlainIcon
        name={iconName}
        size={(size ?? defaultSize) * 0.6}
        color={iconColor}
      />
    </button>
  );
};

export default ActionIcon;
