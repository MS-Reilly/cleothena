import React, { useMemo } from "react";
import { ServiceHighlightCardProps } from "./ServiceHighlightCard.types";
import "./ServiceHighlightCard.scss";
import { useTheme } from "../../theme/hooks/useTheme";

const ServiceHighlightCard: React.FC<ServiceHighlightCardProps> = ({
  imageUrl,
  altText = "Service image",
  title,
  description,
  titleColor = "#2ec4b6", // ✅ Default color if not passed
  className = "",
}) => {
  const theme = useTheme() || {};

  const styles = useMemo(
    () => ({
      fontFamily: theme.typography?.fontFamily || "Nunito, sans-serif",
    }),
    [theme]
  );

  return (
    <div className={`service-highlight-card ${className}`} style={styles}>
      <img
        src={imageUrl}
        alt={altText}
        className="service-highlight-card__image"
      />
      <div className="service-highlight-card__content">
        <h3
          className="service-highlight-card__title"
          style={{ color: titleColor }}
        >
          {title}
        </h3>
        <p className="service-highlight-card__description">{description}</p>
      </div>
    </div>
  );
};

export default ServiceHighlightCard;
