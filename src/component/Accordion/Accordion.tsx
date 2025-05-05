import React, { useState, useMemo } from "react";
import { AccordionProps } from "./Accordion.types";
import { useTheme } from "../../theme/hooks/useTheme";
import Arrow from "../../Assets/icons/menu-arrow3.svg"; // using ReactComponent for inline SVG
import "./Accordion.scss";

const Accordion: React.FC<AccordionProps> = ({
  questions,
  className = "",
  colors = {},
  arrow = {},
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const theme = useTheme() || {};

  const borderRadius = theme.borders?.radiusMd || "8px";
  const boxShadow = theme.shadows?.sm || "rgba(0, 0, 0, 0.1) 0px 3px 6px";
  const fontFamily = theme.typography?.fontFamily || "Nunito, sans-serif";

  const {
    openTextColor = "#ffffff",
    closedTextColor = "#000000",
    openBg = theme.colors?.primary || "#FF9F1A",
    closedBg = "#ffffff",
  } = colors;

  const {
    width = "10px",
    height = "10px",
    fillOpen = "#ffffff",
    fillClosed = "#000000",
  } = arrow;

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!questions?.length) return null;

  return (
    <div className={`accordion ${className}`} style={{ fontFamily }}>
      {questions.map((item, index) => {
        const isOpen = openIndex === index;

        const headerStyle = useMemo(
          () => ({
            backgroundColor: isOpen ? openBg : closedBg,
            color: isOpen ? openTextColor : closedTextColor,
            borderRadius,
            boxShadow,
          }),
          [isOpen]
        );

        return (
          <div
            key={index}
            className="accordion-item"
            style={{ borderRadius, boxShadow }}
          >
            <button
              className={`accordion-header ${isOpen ? "open" : ""}`}
              onClick={() => toggleAccordion(index)}
              style={headerStyle}
            >
              {item.question}
              <span className={`arrow-icon ${isOpen ? "rotated" : ""}`}>
                <Arrow
                  style={{
                    width,
                    height,
                    fill: isOpen ? fillOpen : fillClosed,
                  }}
                />
              </span>
            </button>
            <div className={`accordion-content ${isOpen ? "show" : ""}`}>
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
