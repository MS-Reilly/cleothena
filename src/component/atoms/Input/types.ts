import React from "react";

export type InputStatus = "default" | "success" | "error" | "disabled";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  helperText?: string;
  status?: InputStatus;
  iconName?: string; // Icon name, e.g. "age"
  className?: string;
}
