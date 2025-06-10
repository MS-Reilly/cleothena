import React from "react";

export type ToggleSwitchColorSet = {
  active: string;
  inactive: string;
  disabled: string;
  knob: string;
};

export interface ToggleSwitchProps {
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  size?: number;
  color?: ToggleSwitchColorSet;
  className?: string;
}
