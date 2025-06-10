import React, { FC } from "react";
import styles from "./ToggleSwitch.module.scss";
import { ToggleSwitchProps } from "./types";
import { useTheme } from "../../../theme/hooks/useTheme";

const ToggleSwitch: FC<ToggleSwitchProps> = ({
  checked = false,
  onChange,
  disabled = false,
  size = 20,
  color = {},
  className = "",
}) => {
  const theme = useTheme();
  const themePrimary = theme?.colors?.primary || "#4CAF50";

  // Merge theme and user-provided colors, user prop takes precedence
  const mergedColor = {
    active: themePrimary,
    inactive: "#EAEFEF",
    disabled: "#F0F0F0",
    knob: "#FFFFFF",
    ...color,
  };

  return (
    <label
      className={`${styles.switch} ${className}`}
      style={{
        width: size * 1.6,
        height: size * 0.9,
        backgroundColor: disabled
          ? mergedColor.disabled
          : checked
          ? mergedColor.active
          : mergedColor.inactive,
        opacity: disabled ? 0.6 : 1,
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={styles.input}
      />
      <span
        className={styles.knob}
        style={{
          width: size * 0.8,
          height: size * 0.8,
          backgroundColor: mergedColor.knob,
          transform: checked
            ? `translateX(${size * 0.65}px)`
            : `translateX(1px)`,
        }}
      />
    </label>
  );
};

export default ToggleSwitch;
