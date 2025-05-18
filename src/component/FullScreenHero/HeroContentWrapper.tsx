import React from "react";
import "./styles.scss";
import { HeroContentWrapperProps } from "./types";

const HeroContentWrapper: React.FC<HeroContentWrapperProps> = ({
  children,
  overlay = true,
  overlayColor = "rgba(0, 0, 0, 0.3)",
  gradientDirection = "to bottom",
}) => {
  return (
    <div className="heroWrapper">
      {overlay && (
        <div
          className="heroOverlay"
          style={{
            background: `linear-gradient(${gradientDirection}, ${overlayColor} 0%, transparent 80%)`,
          }}
        />
      )}
      {children}
    </div>
  );
};

export default HeroContentWrapper;
