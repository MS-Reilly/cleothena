import React from 'react';
import { SeparatorProps, ColorVariants } from './types';
import './styles.scss';

/**
 * Map from color variant to actual hex (or theme-based) color.
 * In a real app, you could pull these from a theme or context if desired.
 */
const colorMap: Record<ColorVariants, string> = {
  primary: '#007bff',
  secondary: '#6c757d',
  accent: '#ff00ff',
  highlight: '#ffc107',
};

export const Separator: React.FC<SeparatorProps> = ({
  icon: Icon,
  count = 3,
  color = 'primary',
  size = 'md',
  className = '',
}) => {
  const fillColor = colorMap[color] ?? '#000';

  return (
    <div className={`separator --${size} ${className}`.trim()}>
      {Array.from({ length: count }).map((_, idx) => (
        <Icon
          key={idx}
          fill={fillColor}
          // You can pass other SVG props here if needed (e.g., stroke, style, etc.)
        />
      ))}
    </div>
  );
};

export default Separator;
