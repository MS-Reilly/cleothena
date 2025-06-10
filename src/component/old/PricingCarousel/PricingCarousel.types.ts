import { ReactNode, CSSProperties } from "react";

export interface PricingCarouselProps {
  children: ReactNode;
  className?: string;
  arrowStyle?: CSSProperties; // ✅ New optional prop for custom arrow styles
}
