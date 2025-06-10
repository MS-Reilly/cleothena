// Button.tsx
import React, { FC, useState, useMemo } from "react";
import styles from "./Button.module.scss";
import { PlainIcon } from "../../atoms";
import { useTheme } from "../../../theme/hooks/useTheme";
import { ButtonProps, ButtonVariant } from "./types";

const Button: FC<ButtonProps> = ({
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
  iconName,
  iconPosition = "left",
  text = "",
  colors: colorsProp = {},
  size: sizeProp = {},
  className = "",
  ...props
}) => {
  const theme = useTheme();
  const {
    colors,
    buttons: {
      height: buttonHeight = 40,
      paddingInline = 20,
      fontWeight = 600,
    } = {},
  } = theme;

  const [isHovered, setIsHovered] = useState(false);

  // Brighten/darken helper
  const adjustBrightness = (hex: string, percent: number) => {
    if (!hex || hex.length < 4) return hex;
    const f = parseInt(hex.slice(1), 16);
    const t = percent < 0 ? 0 : 255;
    const p = Math.abs(percent);
    const R = f >> 16;
    const G = (f >> 8) & 0x00ff;
    const B = f & 0x0000ff;
    const calc = (c: number) => Math.round((t - c) * p) + c;
    return `#${(0x1000000 + calc(R) * 0x10000 + calc(G) * 0x100 + calc(B))
      .toString(16)
      .slice(1)
      .padStart(6, "0")}`;
  };

  // Default per-variant tokens
  const variantDefaults: Record<ButtonVariant, Required<ButtonColors>> = {
    primary: {
      backgroundColor: colors.primary,
      textColor: colors.neutral.white,
      iconColor: colors.neutral.white,
      hoverColor: colors.primary80 ?? adjustBrightness(colors.primary, 0.1),
    },
    secondary: {
      backgroundColor: colors.secondary,
      textColor: colors.neutral.white,
      iconColor: colors.neutral.white,
      hoverColor: colors.secondary80 ?? adjustBrightness(colors.secondary, 0.1),
    },
    danger: {
      backgroundColor: colors.danger,
      textColor: colors.neutral.white,
      iconColor: colors.neutral.white,
      hoverColor: adjustBrightness(colors.danger, -0.1),
    },
    success: {
      backgroundColor: colors.success,
      textColor: colors.neutral.white,
      iconColor: colors.neutral.white,
      hoverColor: adjustBrightness(colors.success, -0.1),
    },
    info: {
      backgroundColor: colors.info,
      textColor: colors.neutral.white,
      iconColor: colors.neutral.white,
      hoverColor: adjustBrightness(colors.info, -0.1),
    },
    warning: {
      backgroundColor: colors.warning,
      textColor: colors.neutral.black,
      iconColor: colors.neutral.black,
      hoverColor: adjustBrightness(colors.warning, -0.1),
    },
    text: {
      backgroundColor: "transparent",
      textColor: colors.primary,
      iconColor: colors.primary,
      hoverColor: colors.neutral.grey100 ?? "rgba(0,0,0,0.05)",
    },
  };

  const base = variantDefaults[variant] ?? variantDefaults.primary;
  const merged = { ...base, ...colorsProp };
  const { backgroundColor, textColor, iconColor, hoverColor } = merged;

  const {
    buttonWidth = "fit-content",
    iconSize = Math.floor(buttonHeight * 0.6),
  } = sizeProp;

  const bg = isHovered ? hoverColor : backgroundColor;
  const fg = isHovered && variant === "text" ? hoverColor : textColor;
  const ic = isHovered && variant === "text" ? hoverColor : iconColor;

  const style = useMemo(
    () => ({
      backgroundColor: bg,
      color: fg,
      width: buttonWidth,
      height: buttonHeight,
      padding: `0 ${paddingInline}px`,
      fontWeight,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    }),
    [bg, fg, buttonWidth, buttonHeight, paddingInline, fontWeight]
  );

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${styles[variant]} ${
        disabled ? styles.disabled : ""
      } ${className}`}
      style={style}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => !disabled && setIsHovered(false)}
      {...props}
    >
      {iconName && iconPosition === "left" && (
        <PlainIcon
          name={iconName}
          size={iconSize}
          color={ic}
          className={styles.icon}
        />
      )}
      <span className={styles.text}>{text}</span>
      {iconName && iconPosition === "right" && (
        <PlainIcon
          name={iconName}
          size={iconSize}
          color={ic}
          className={styles.icon}
        />
      )}
    </button>
  );
};

export default Button;
