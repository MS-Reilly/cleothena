import React from "react";
import ArrowDownIcon from "./../../Assets/icons/down-arrow.svg";
import { useTheme } from "../../theme/hooks/useTheme";
import { ScrollIndicatorProps } from "./types";
import "./styles.scss";

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  className = "",
  onClick,
  text = "Descubre más",
  arrowProps = {},
  textProps = {},
  ...rest
}) => {
  const arrowStyle = {
    ...(arrowProps.style || {}),
  };

  const textStyle = {
    ...(textProps.style || {}),
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
      <ArrowDownIcon className="arrow bounce" style={arrowStyle} {...arrowProps} />
      <span className="text" style={textStyle} {...textProps}>
        {text}
      </span>
      <ArrowDownIcon className="arrow bounce" style={arrowStyle} {...arrowProps} />
    </div>
  );
};

export default ScrollIndicator;
