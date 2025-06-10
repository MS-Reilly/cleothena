import React from "react";

export type RadioButtonColorSet = {
  active: string;
  inactive: string;
  disabled: string;
  disabledActive: string;
};

export interface RadioButtonProps {
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string | number;
  name?: string;
  size?: number;
  disabled?: boolean;
  className?: string;
  color?: RadioButtonColorSet;
}
