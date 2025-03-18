import React from 'react';
import { SimpleButtonProps } from './types';
import './styles.scss';

const SimpleButton: React.FC<SimpleButtonProps> = ({
  title,
  children,
  onClick,
  className,
  disabled,
  ...rest // To pass down other button attributes
}) => {
  const buttonClassName = `buttonClass ${className || ''}`; // You'll need CSS for .simple-button

  return (
      <button
          className={buttonClassName}
          onClick={onClick}
          disabled={disabled}
          {...rest}
      >
          {title}
          {children}
      </button>
  );
};

export default SimpleButton;