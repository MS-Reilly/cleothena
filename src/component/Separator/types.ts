import React from 'react';

/**
 * Possible color variants, e.g. for the SVG fill.
 */
export type ColorVariants = 'primary' | 'secondary' | 'accent' | 'highlight';

/**
 * Possible size variants for small responsive changes.
 */
export type SizeVariants = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface SeparatorProps {
  /**
   * The SVG React component (from `import Icon from '...svg'` via SVGR).
   */
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  
  /**
   * How many times to repeat the icon.
   * @default 3
   */
  count?: number;
  
  /**
   * Color variant for the icon fill.
   * @default "primary"
   */
  color?: ColorVariants;
  
  /**
   * Size variant to slightly scale the icon dimensions.
   * @default "md"
   */
  size?: SizeVariants;
  
  /**
   * Additional CSS class.
   */
  className?: string;
}
