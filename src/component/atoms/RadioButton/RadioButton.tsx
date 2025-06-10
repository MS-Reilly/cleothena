import React, { FC } from "react";
import styles from "./RadioButton.module.scss";
import { RadioButtonProps, RadioButtonColorSet } from "./types";

const RadioButton: FC<RadioButtonProps> = ({
  checked = false,
  onChange,
  value,
  name,
  size = 20,
  disabled = false,
  className = "",
  color = {
    active: "#4CAF50",
    inactive: "#ccc",
    disabled: "#e0e0e0",
    disabledActive: "#a5d6a7",
  },
}) => {
  const getBorderColor = (): string => {
    if (disabled && checked) return color.disabledActive;
    if (disabled) return color.disabled;
    return checked ? color.active : color.inactive;
  };

  const getFillColor = (): string => {
    if (disabled && checked) return color.disabledActive;
    if (disabled) return "transparent";
    return checked ? color.active : "transparent";
  };

  return (
    <label
      className={`${styles.radioWrapper} ${className}`}
      style={{
        width: size,
        height: size,
        borderColor: getBorderColor(),
        opacity: disabled ? 0.6 : 1,
      }}
    >
      <input
        type="radio"
        className={styles.input}
        value={value}
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <div
        className={styles.indicator}
        style={{
          backgroundColor: getFillColor(),
        }}
      />
    </label>
  );
};

export default RadioButton;
