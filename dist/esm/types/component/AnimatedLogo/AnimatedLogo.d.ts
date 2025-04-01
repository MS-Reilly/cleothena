import React from "react";
import { MotionProps } from "framer-motion";
import "./styles.scss";
export interface AnimatedLogoProps extends MotionProps {
    logo: React.ElementType;
    className?: string;
    size?: number | string;
}
declare const AnimatedLogo: React.FC<AnimatedLogoProps>;
export default AnimatedLogo;
