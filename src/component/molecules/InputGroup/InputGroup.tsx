import React from "react";
import styles from "./InputGroup.module.scss";
import { InputGroupProps } from "./types";
import { Input, Label, Tooltip } from "../../atoms";
import { useTheme } from "../../../theme/hooks/useTheme";

const InputGroup: React.FC<InputGroupProps> = ({
  label,
  labelProps,
  tooltipProps,
  helpText,
  error,
  leftSlot,
  rightSlot,
  className = "",
  ...inputProps
}) => {
  const theme = useTheme();
  const fontFamily = theme.typography?.fontFamily || "inherit";

  const labelContent = (
    <Label
      {...labelProps}
      style={{
        fontFamily,
        ...(labelProps?.style || {}),
      }}
      className={styles.label}
    >
      {label}
      {tooltipProps?.content && (
        <Tooltip {...tooltipProps}>
          <span style={{ marginLeft: 4, cursor: "pointer" }}>ⓘ</span>
        </Tooltip>
      )}
    </Label>
  );

  return (
    <div className={`${styles.inputGroup} ${className}`}>
      <div className={styles.labelRow}>{labelContent}</div>
      <div className={styles.inputRow}>
        {leftSlot && <span className={styles.leftSlot}>{leftSlot}</span>}
        <span className={styles.inputWrapper}>
          <Input {...inputProps} status={error ? "error" : inputProps.status} />
        </span>
        {rightSlot && <span className={styles.rightSlot}>{rightSlot}</span>}
      </div>
      {helpText && (
        <div className={`${styles.helpText} ${error ? styles.errorText : ""}`}>
          {helpText}
        </div>
      )}
    </div>
  );
};

export default InputGroup;
