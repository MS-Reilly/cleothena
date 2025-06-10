import React, { useMemo } from "react";
import { useTheme } from "../../../theme/hooks/useTheme";
import { SimpleButtonProps } from "./types";
import "./styles.scss";

const SimpleButton: React.FC<SimpleButtonProps> = ({
  title,
  children,
  onClick,
  className = "",
  disabled = false,
  variant = "md",
  color = "primary",
  outline = false,
  ghost = false,
  ...rest
}) => {
  const theme = useTheme() || {};

  const borderRadiusMap = {
    xs: theme.borders?.radiusXs || "3px",
    sm: theme.borders?.radiusSm || "4px",
    md: theme.borders?.radiusMd || "8px",
    lg: theme.borders?.radiusLg || "12px",
  };

  const boxShadowMap = {
    xs: theme.shadows?.xs || "rgba(0, 0, 0, 0.15) 0px 1px 3px",
    sm: theme.shadows?.sm || "rgba(0, 0, 0, 0.15) 0px 1px 3px",
    md: theme.shadows?.md || "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    lg: theme.shadows?.lg || "rgba(0, 0, 0, 0.35) 0px 10px 20px",
  };

  const themedStyles = useMemo(
    () => ({
      backgroundColor: ghost
        ? "transparent"
        : outline
        ? "transparent"
        : disabled
        ? theme.colors?.disabledBg || "#E0E0E0"
        : theme.colors?.[color] || "#FF9F1A",
      color:
        ghost || outline
          ? theme.colors?.[color] || "#FF9F1A"
          : disabled
          ? theme.colors?.disabledText || "#9E9E9E"
          : theme.colors?.neutral?.white || "#FFFFFF",
      borderColor: disabled
        ? theme.colors?.disabledBorder || "#BDBDBD"
        : theme.colors?.[color] || "#FF9F1A",
      borderRadius: borderRadiusMap[variant],
      boxShadow: boxShadowMap[variant],
      fontFamily: theme.typography?.fontFamily || "Arial, sans-serif",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.6 : 1,
    }),
    [theme, color, outline, ghost, disabled, variant]
  );

  return (
    <div
      className={`buttonClass ${variant} ${color} ${className} ${
        disabled ? "disabled" : ""
      } 
    ${outline ? "outline" : ""} ${ghost ? "ghost" : ""}`}
      onClick={!disabled ? onClick : undefined}
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      style={themedStyles}
      {...rest}
    >
      {title}
      {children}
    </div>
  );
};

export default SimpleButton;
