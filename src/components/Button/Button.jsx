import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

/**
 * A reusable button component.
 *
 * @component
 * @example
 * const handleClick = () => alert('Button clicked!');
 * return (
 *   <Button variant="secondary" size="lg" hasIcon onClick={handleClick}>
 *     <IconComponent />
 *     Click Me!
 *   </Button>
 * );
 */
const Button = ({ variant, size, hasIcon, children, disabled, onClick, ...props }) => {
  return (
    <button
      className={`button button--${variant} button--${size} ${hasIcon ? 'button--has-icon' : ''}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  /** Sets the button style variant. */
  variant: PropTypes.oneOf(['primary', 'secondary', 'accent', 'danger', 'success']),
  /** Determines the size of the button. */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** Indicates that the button contains an icon to adjust padding accordingly. */
  hasIcon: PropTypes.bool,
  /** Content to be displayed inside the button. */
  children: PropTypes.node.isRequired,
  /** Disables the button when true. */
  disabled: PropTypes.bool,
  /** Callback function to handle button clicks. */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: 'primary',
  size: 'md',
  hasIcon: false,
  disabled: false,
  onClick: () => {},
};

export default Button;
