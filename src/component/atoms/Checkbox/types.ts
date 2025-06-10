// types.ts
import { ChangeEventHandler } from "react";

export interface CheckboxColors {
  /** Background when checked */
  active: string;
  /** Background when unchecked */
  inactive: string;
  /** Background when disabled & unchecked */
  disabled: string;
  /** Background when disabled & checked */
  disabledActive: string;
}

export interface CheckboxProps {
  /** Checked state */
  checked?: boolean;
  /** Change handler */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /** Name attribute */
  name?: string;
  /** Value attribute */
  value?: string | number;
  /** Disabled state */
  disabled?: boolean;
  /** Size in px */
  size?: number;
  /** Color tokens */
  color?: Partial<CheckboxColors>;
  /** Label text */
  label?: string;
  /** Label color */
  labelColor?: string;
  /** Extra CSS classes */
  className?: string;
}
