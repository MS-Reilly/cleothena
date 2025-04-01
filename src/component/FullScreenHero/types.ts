import { ReactNode } from "react";

export interface FullScreenHeroProps {
  image: string;
  children: ReactNode;
  top?: string;
  left?: string;
  right?: string;
  animationThreshold?: number;
  overlay?: boolean; // Optional dark overlay
  overlayColor?: string; // Custom overlay colour
}

export interface HeroContentWrapperProps {
  children: React.ReactNode;
  overlayColor?: string;
  gradientDirection?: string; // e.g. 'to bottom', 'to right'
}
