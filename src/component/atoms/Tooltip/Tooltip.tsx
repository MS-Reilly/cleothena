import React, { useState, useRef, useEffect, FC } from "react";
import styles from "./Tooltip.module.scss";
import { TooltipProps } from "./types";

const Tooltip: FC<TooltipProps> = ({
  children,
  content,
  position = "top",
  delay = 500,
  disabled = false,
  colors = {},
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const showTimeoutRef = useRef<number | null>(null);
  const hideTimeoutRef = useRef<number | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = () => {
    if (disabled) return;
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    showTimeoutRef.current = window.setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const handleMouseLeave = () => {
    if (showTimeoutRef.current) clearTimeout(showTimeoutRef.current);
    hideTimeoutRef.current = window.setTimeout(() => {
      setIsVisible(false);
    }, 100);
  };

  useEffect(() => {
    // Cleanup on unmount
    return () => {
      if (showTimeoutRef.current) clearTimeout(showTimeoutRef.current);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible || !wrapperRef.current || !tooltipRef.current) return;
    const wrapperRect = wrapperRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    let top = 0,
      left = 0;
    switch (position) {
      case "top":
        top = -tooltipRect.height - 8;
        left = (wrapperRect.width - tooltipRect.width) / 2;
        break;
      case "bottom":
        top = wrapperRect.height + 8;
        left = (wrapperRect.width - tooltipRect.width) / 2;
        break;
      case "left":
        top = (wrapperRect.height - tooltipRect.height) / 2;
        left = -tooltipRect.width - 8;
        break;
      case "right":
        top = (wrapperRect.height - tooltipRect.height) / 2;
        left = wrapperRect.width + 8;
        break;
      default:
        break;
    }
    tooltipRef.current.style.top = `${top}px`;
    tooltipRef.current.style.left = `${left}px`;
  }, [isVisible, position, content]);

  const tooltipStyle: React.CSSProperties = {
    "--tooltip-bg": colors.backgroundColor || "#333",
    "--tooltip-text": colors.textColor || "#fff",
  } as React.CSSProperties;

  return (
    <div
      ref={wrapperRef}
      className={styles.tooltipWrapper}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isVisible && content && (
        <div
          ref={tooltipRef}
          className={`${styles.tooltip} ${styles[position]} ${
            isVisible ? styles.show : ""
          }`}
          role="tooltip"
          style={tooltipStyle}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
