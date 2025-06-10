import React, { useMemo } from "react";
import { PricingCardProps } from "./PricingCard.types";
import "./PricingCard.scss";
import { useTheme } from "../../../theme/hooks/useTheme";
import SimpleButton from "../SimpleButton/SimpleButton";

const PricingCard: React.FC<PricingCardProps> = ({
  planName,
  price,
  billingCycle,
  description,
  features,
  isPopular = false,
  popularLabel = "MÁS POPULAR",
  buttonText = "Cotizar",
  onButtonClick,
  className = "",
}) => {
  const theme = useTheme() || {};

  const themedStyles = useMemo(
    () => ({
      fontFamily: theme.typography?.fontFamily || "Nunito, sans-serif",
      boxShadow: theme.shadows?.md || "0 2px 6px rgba(0, 0, 0, 0.05)",
    }),
    [theme]
  );

  return (
    <div className={`pricing-card ${className}`} style={themedStyles}>
      {isPopular && <div className="pricing-card__badge">{popularLabel}</div>}

      <div className="pricing-card__header">
        {price ? (
          <>
            <h2 className="pricing-card__price">
              {price}
              <span className="pricing-card__billing-cycle">
                {billingCycle}
              </span>
            </h2>
            <h3 className="pricing-card__plan-name">{planName}</h3>
          </>
        ) : (
          <h2 className="pricing-card__plan-duration">{planName}</h2>
        )}
        <p className="pricing-card__description">{description}</p>
      </div>

      <ul className="pricing-card__features">
        {features.map((feature, index) => (
          <li key={index} className="pricing-card__feature">
            {feature}
          </li>
        ))}
      </ul>

      <SimpleButton
        title={buttonText}
        onClick={onButtonClick}
        variant="md"
        color="primary"
      />
    </div>
  );
};

export default PricingCard;
