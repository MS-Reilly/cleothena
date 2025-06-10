import React from "react";
import styles from "./Input.module.scss";
import { PlainIcon } from "../../atoms";
import { InputProps } from "./types";

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder = "",
  value,
  onChange,
  helperText = "",
  status = "default",
  iconName,
  className = "",
  ...props
}) => {
  const iconColor =
    status === "error" ? "#e53935" : status === "disabled" ? "#ccc" : "#888";

  return (
    <div className={`${styles.inputWrapper} ${styles[status]} ${className}`}>
      <div className={styles.inputContainer}>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={status === "disabled"}
          className={styles.input}
          {...props}
        />
        {iconName && <PlainIcon name={iconName} size={24} color={iconColor} />}
      </div>
      {helperText && <span className={styles.helperText}>{helperText}</span>}
    </div>
  );
};

export default Input;
