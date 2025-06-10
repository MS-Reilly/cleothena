export type ScrollDirection = 'up' | 'down' | 'left' | 'right' | 'bothSides';

export interface ScrollIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  onClick?: () => void;
  className?: string;
  text?: string;
  arrowProps?: React.SVGProps<SVGSVGElement>;
  textProps?: React.HTMLAttributes<HTMLSpanElement>;
  direction?: ScrollDirection;
}
