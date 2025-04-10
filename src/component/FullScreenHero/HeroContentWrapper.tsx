import React from "react";
import "./styles.scss";
import { HeroContentWrapperProps } from "./types";

const HeroContentWrapper: React.FC<HeroContentWrapperProps> = ({
  children,
  overlayColor = "rgba(0, 0, 0, 0.3)",
  gradientDirection = "to bottom",
}) => {
  return (
    <div className="heroWrapper">
      <div
        className="heroOverlay"
        style={{
          background: `linear-gradient(${gradientDirection}, ${overlayColor} 0%, transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
};

export default HeroContentWrapper;
