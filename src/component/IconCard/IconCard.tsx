import React, { useMemo } from "react";
import { IconCardProps } from "./IconCard.types";
import "./IconCard.scss";
import { useTheme } from "../../theme/hooks/useTheme";

const IconCard: React.FC<IconCardProps> = ({
  icon: Icon,
  title,
  color = "#2ec4b6",
  iconSize = 24,
  backgroundColor = "#ffffff", // ✅ Add this here!
  className = "",
}) => {
  const theme = useTheme() || {};

  const styles = useMemo(
    () => ({
      boxShadow: theme.shadows?.sm || "0 2px 6px rgba(0, 0, 0, 0.05)",
      fontFamily: theme.typography?.fontFamily || "Nunito, sans-serif",
      backgroundColor, // ✅ Now works because it's in scope
    }),
    [theme, backgroundColor]
  );

  return (
    <div className={`icon-card ${className}`} style={styles}>
      <div className="icon-card__icon">
        <Icon style={{ width: iconSize, height: iconSize, fill: color }} />
      </div>
      <span className="icon-card__title" style={{ color }}>
        {title}
      </span>
    </div>
  );
};

export default IconCard;
