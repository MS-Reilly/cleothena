import { ReactNode } from "react";
export interface FullScreenHeroProps {
    image: string;
    children: ReactNode;
    top?: string;
    left?: string;
    right?: string;
    animationThreshold?: number;
    overlay?: boolean;
    overlayColor?: string;
}
