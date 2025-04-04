import React from 'react';

export interface ScrollIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  onClick?: () => void;
  className?: string;
  text?: string;
  arrowProps?: React.SVGProps<SVGSVGElement>;
  textProps?: React.HTMLAttributes<HTMLSpanElement>;
}
