import React from 'react';
import ArrowDownIcon from './../../Assets/icons/down-arrow.svg?react';
import { useTheme } from '../../theme/hooks/useTheme';
import { ScrollIndicatorProps } from './types';
import './styles.scss';

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ className = '', onClick, text = 'Descubre más', ...rest }) => {
  const theme = useTheme() || {};

  const defaultStyles = {
    color: theme.colors.primary || '#ffffff',
  };

  return (
    <div
      className={`scroll-indicator ${className}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label="Scroll down indicator"
      {...rest}
    >
      <ArrowDownIcon className="arrow bounce" fill={defaultStyles.color}/>
      <span className="text" style={defaultStyles}>{text}</span>
      <ArrowDownIcon className="arrow bounce" fill={defaultStyles.color} />
    </div>
  );
};

export default ScrollIndicator;
