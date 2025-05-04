import React, { useState, useMemo } from "react";
import { PricingCarouselProps } from "./PricingCarousel.types";
import "./PricingCarousel.scss";
import ArrowRightIcon from "./../../Assets/icons/right-arrow.svg";
import { useTheme } from "../../theme/hooks/useTheme";

const PricingCarousel: React.FC<PricingCarouselProps> = ({
  children,
  className = "",
  arrowStyle = {},
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = React.Children.count(children);
  const theme = useTheme() || {};

  const styles = useMemo(
    () => ({
      boxShadow: theme.shadows?.sm || "0 2px 6px rgba(0, 0, 0, 0.1)",
      fontFamily: theme.typography?.fontFamily || "Nunito, sans-serif",
      arrowFill: theme.colors?.primary || "#2ec4b6",
    }),
    [theme]
  );

  const combinedArrowStyle = {
    width: "20px",
    height: "20px",
    fill: styles.arrowFill,
    display: "block",
    ...arrowStyle, // ✅ Apply overrides from props
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalCards);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  return (
    <div
      className={`carousel ${className}`}
      style={{ fontFamily: styles.fontFamily }}
    >
      <ArrowRightIcon
        style={{ ...combinedArrowStyle, transform: "scaleX(-1)" }}
        className="carousel__arrow carousel__arrow--left"
        onClick={prevSlide}
      />

      <div className="carousel__wrapper">
        <div
          className="carousel__cards"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {React.Children.map(children, (child, index) => (
            <div
              className="carousel__card"
              key={index}
              style={{ boxShadow: styles.boxShadow }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      <div
        className="carousel__arrow carousel__arrow--right"
        onClick={nextSlide}
      >
        <ArrowRightIcon style={combinedArrowStyle} />
      </div>
    </div>
  );
};

export default PricingCarousel;
