import React from "react";
import styles from "./Label.module.scss";
import { LabelProps } from "./types";
import { useTheme } from "../../../theme/hooks/useTheme"; // Update path as needed

const Label: React.FC<LabelProps> = ({
  children,
  htmlFor,
  color,
  className = "",
  required = false,
  ...props
}) => {
  const theme = useTheme();
  const fontFamily = theme.typography?.fontFamily || "inherit";

  // Support both color and fontFamily via CSS variables for max flexibility
  const style: React.CSSProperties = {
    "--label-color": color || "#222",
    fontFamily,
  };

  return (
    <label
      htmlFor={htmlFor}
      className={`${styles.label} ${className}`}
      style={style}
      {...props}
    >
      {children}
      {required && <span className={styles.required}>*</span>}
    </label>
  );
};

export default Label;
