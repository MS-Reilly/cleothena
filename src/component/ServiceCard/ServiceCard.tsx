import React from "react";
import "./ServiceCard.scss";
import { ServiceCardProps } from "./ServiceCard.types";
import SimpleButton from "../SimpleButton/SimpleButton";
import { useTheme } from "../../theme/hooks/useTheme";

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageUrl,
  altText = "",
  className = "",
  buttonProps,
}) => {
  const theme = useTheme();
  const fontFamily = theme?.typography?.fontFamily || "Nunito, sans-serif";

  return (
    <div className={`service-card ${className}`} style={{ fontFamily }}>
      <div className="service-card__image-wrapper">
        <img src={imageUrl} alt={altText} className="service-card__image" />
      </div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__description">{description}</p>
      <SimpleButton title="Learn More" {...buttonProps} />
    </div>
  );
};

export default ServiceCard;
