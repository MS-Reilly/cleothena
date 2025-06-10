import React, { useMemo } from "react";
import "./TestimonialCard.scss";
import { TestimonialCardProps } from "./TestimonialCard.types";
import { useTheme } from "../../../theme/hooks/useTheme";

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  message,
  imageUrl,
  rating = 5,
  className = "",
  variant = "md",
}) => {
  const theme = useTheme() || {};

  const boxShadowMap = {
    xs: theme.shadows?.xs || "rgba(0, 0, 0, 0.15) 0px 1px 3px",
    sm: theme.shadows?.sm || "rgba(0, 0, 0, 0.15) 0px 1px 3px",
    md: theme.shadows?.md || "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    lg: theme.shadows?.lg || "rgba(0, 0, 0, 0.35) 0px 10px 20px",
  };

  const cardStyle = useMemo(
    () => ({
      boxShadow: boxShadowMap[variant],
      fontFamily: theme.typography?.fontFamily || "Nunito, sans-serif",
    }),
    [theme, variant]
  );

  const renderStars = () => {
    const fullStars = Math.max(0, Math.min(5, rating));
    return [...Array(5)].map((_, i) => (
      <span
        key={i}
        className={`testimonial-card__star ${i < fullStars ? "filled" : ""}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className={`testimonial-card ${className}`} style={cardStyle}>
      <div className="testimonial-card__top">
        <div className="testimonial-card__person">
          <img className="testimonial-card__image" src={imageUrl} alt={name} />
          <div>
            <div className="testimonial-card__name">{name}</div>
            <div className="testimonial-card__role">{role}</div>
          </div>
        </div>
        <div className="testimonial-card__stars">{renderStars()}</div>
      </div>
      <p className="testimonial-card__message">“{message}”</p>
    </div>
  );
};

export default TestimonialCard;
