import React from "react";

export interface SettingItem {
  /** Unique key */
  key: string;
  /** Label for the setting */
  label: React.ReactNode;
  /** Setting type: "toggle" | "checkbox" | "custom" */
  type: "toggle" | "checkbox" | "custom";
  /** Value of the setting */
  value?: boolean;
  /** onChange handler for toggle/checkbox */
  onChange?: (checked: boolean) => void;
  /** Tooltip content (optional) */
  tooltip?: React.ReactNode;
  /** Help text (optional) */
  helpText?: React.ReactNode;
  /** Disabled (optional) */
  disabled?: boolean;
  /** For custom type, a custom element */
  customElement?: React.ReactNode;
  /** Extra props for the setting row */
  [key: string]: any;
}

export interface SettingsPanelProps {
  /** Array of settings items */
  items: SettingItem[];
  /** Optional panel title */
  title?: React.ReactNode;
  /** Optional footer or extra children */
  children?: React.ReactNode;
  /** Extra className */
  className?: string;
}
