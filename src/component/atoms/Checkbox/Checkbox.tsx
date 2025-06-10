import React, { FC } from "react";
import styles from "./Checkbox.module.scss";
import { PlainIcon } from "../../atoms";
import { CheckboxProps, CheckboxColors } from "./types";
import { useTheme } from "../../../theme/hooks/useTheme";

const Checkbox: FC<CheckboxProps> = ({
  checked = false,
  onChange,
  name,
  value,
  disabled = false,
  size = 24,
  color = {},
  label = "",
  labelColor = "#000",
  className = "",
}) => {
  const theme = useTheme();
  const themePrimary = theme?.colors?.primary || "#4CAF50";

  // Merge theme primary with the rest of your defaults and overrides
  const defaultColors: CheckboxColors = {
    active: themePrimary,
    inactive: "#EDEDED",
    disabled: "#F0F0F0",
    disabledActive: "#BDBDBD",
  };
  const {
    active,
    inactive,
    disabled: colDisabled,
    disabledActive,
  } = {
    ...defaultColors,
    ...color,
  };

  const getBg = () => {
    if (disabled && checked) return disabledActive;
    if (disabled) return colDisabled;
    return checked ? active : inactive;
  };

  const getIconColor = () => {
    if ((disabled && checked) || checked) return "#fff";
    return "transparent";
  };

  return (
    <label className={`${styles.checkboxContainer} ${className}`}>
      <span
        className={styles.checkboxWrapper}
        style={{
          width: size,
          height: size,
          backgroundColor: getBg(),
          opacity: disabled ? 0.5 : 1,
        }}
      >
        <input
          type="checkbox"
          className={styles.input}
          checked={checked}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
        {checked && (
          <PlainIcon name={"check"} size={size * 0.6} color={getIconColor()} />
        )}
      </span>

      {label && (
        <span
          className={styles.label}
          style={{ color: disabled ? "#999" : labelColor, marginLeft: 8 }}
        >
          {label}
        </span>
      )}
    </label>
  );
};

export default Checkbox;
