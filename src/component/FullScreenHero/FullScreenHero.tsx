import React, { useRef, useEffect, useState } from "react";
import { FullScreenHeroProps } from "./types";
import "./styles.scss";

const FullScreenHero: React.FC<FullScreenHeroProps> = ({
  image,
  children,
  top = "0%",
  left = "0%",
  right,
  animationThreshold = 0.5,
  overlay = false,
  overlayColor = "rgba(0, 0, 0, 0.4)",
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: animationThreshold }
    );

    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, [animationThreshold]);

  return (
    <div className="fullscreen-hero">
      <img src={image} alt="Hero Background" className="fullscreen-hero__image" />

      {overlay && (
        <div
          className="fullscreen-hero__overlay"
          style={{ backgroundColor: overlayColor }}
        />
      )}

      <div
        ref={textRef}
        className={`fullscreen-hero__content ${
          isVisible ? "animate-in" : "animate-out"
        }`}
        style={{ top, left, right }}
      >
        {children}
      </div>
    </div>
  );
};

export default FullScreenHero;
