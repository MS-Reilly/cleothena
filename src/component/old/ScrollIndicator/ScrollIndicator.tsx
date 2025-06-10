import React from "react";
import ArrowDownIcon from "./../../Assets/icons/down-arrow.svg";
import ArrowLeftIcon from "./../../Assets/icons/left-arrow.svg";
import ArrowRightIcon from "./../../Assets/icons/right-arrow.svg";
import ArrowUpIcon from "./../../Assets/icons/up-arrow.svg"; // Fixed: use up-arrow.svg
import { useTheme } from "../../../theme/hooks/useTheme";
import { ScrollIndicatorProps } from "./types";
import "./styles.scss";

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  className = "",
  onClick,
  text = "Descubre más",
  arrowProps = {},
  textProps = {},
  direction = "down",
  ...rest
}) => {
  const arrowStyle = {
    ...(arrowProps.style || {}),
  };

  const textStyle = {
    ...(textProps.style || {}),
  };

  const renderContent = () => {
    switch (direction) {
      case "up":
        return (
          <>
            <ArrowUpIcon
              className="arrow bounce"
              style={arrowStyle}
              {...arrowProps}
            />
            <span className="text" style={textStyle} {...textProps}>
              {text}
            </span>
            <ArrowUpIcon
              className="arrow bounce"
              style={arrowStyle}
              {...arrowProps}
            />
          </>
        );
      case "left":
        return (
          <>
            <ArrowLeftIcon
              className="arrow bounce"
              style={arrowStyle}
              {...arrowProps}
            />
            <span className="text" style={textStyle} {...textProps}>
              {text}
            </span>
          </>
        );
      case "right":
        return (
          <>
            <span className="text" style={textStyle} {...textProps}>
              {text}
            </span>
            <ArrowRightIcon
              className="arrow bounce"
              style={arrowStyle}
              {...arrowProps}
            />
          </>
        );
      case "bothSides":
        return (
          <>
            <ArrowLeftIcon
              className="arrow bounce"
              style={arrowStyle}
              {...arrowProps}
            />
            <span className="text" style={textStyle} {...textProps}>
              {text}
            </span>
            <ArrowRightIcon
              className="arrow bounce"
              style={arrowStyle}
              {...arrowProps}
            />
          </>
        );
      case "down":
      default:
        return (
          <>
            <ArrowDownIcon
              className="arrow bounce"
              style={arrowStyle}
              {...arrowProps}
            />
            <span className="text" style={textStyle} {...textProps}>
              {text}
            </span>
            <ArrowDownIcon
              className="arrow bounce"
              style={arrowStyle}
              {...arrowProps}
            />
          </>
        );
    }
  };

  return (
    <div
      className={`scroll-indicator ${className}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`Scroll ${direction} indicator`}
      {...rest}
    >
      {renderContent()}
    </div>
  );
};

export default ScrollIndicator;
