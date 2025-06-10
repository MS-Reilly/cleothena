import React from "react";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /** The label text */
  children: React.ReactNode;
  /** Optional id of the input to link with */
  htmlFor?: string;
  /** Optional color for the label text */
  color?: string;
  /** Optional extra class */
  className?: string;
  /** Show required asterisk */
  required?: boolean;
}
