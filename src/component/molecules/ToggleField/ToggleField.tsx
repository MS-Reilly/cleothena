import React from "react";
import styles from "./ToggleField.module.scss";
import { ToggleFieldProps } from "./types";
import { ToggleSwitch, Tooltip, Label } from "../../atoms";
import { useTheme } from "../../../theme/hooks/useTheme";

const ToggleField: React.FC<ToggleFieldProps> = ({
  label,
  helpText,
  tooltipProps,
  labelProps,
  className = "",
  labelPosition = "left",
  ...toggleProps
}) => {
  const theme = useTheme();
  const fontFamily = theme.typography?.fontFamily || "inherit";

  // Optional tooltip content
  const tooltipContent = tooltipProps?.content;
  const tooltipRest = { ...tooltipProps };
  delete tooltipRest.content;

  // Render label with optional Tooltip
  const labelContent = (
    <Label
      {...labelProps}
      style={{
        "--label-color": labelProps?.color || "#222",
        fontFamily,
        ...(labelProps?.style || {}),
      }}
      className={styles.label}
    >
      {label}
      {tooltipContent && (
        <Tooltip content={tooltipContent} {...tooltipRest}>
          <span style={{ marginLeft: 4, cursor: "pointer" }}>ⓘ</span>
        </Tooltip>
      )}
    </Label>
  );

  return (
    <div className={`${styles.toggleField} ${className}`}>
      {labelPosition === "left" && labelContent}
      <ToggleSwitch {...toggleProps} className={styles.toggleSwitch} />
      {labelPosition === "right" && labelContent}
      {helpText && <div className={styles.helpText}>{helpText}</div>}
    </div>
  );
};

export default ToggleField;
