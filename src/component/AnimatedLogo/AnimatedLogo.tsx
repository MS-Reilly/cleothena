import React from "react";
import { motion, MotionProps } from "framer-motion";
import "./styles.scss";

export interface AnimatedLogoProps extends MotionProps {
  logo: React.ElementType; // The React component for the SVG
  className?: string;
  size?: number | string;
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({
  logo: Logo,
  className = "",
  size = 150,
  ...rest
}) => {
  return (
    <motion.div
      className={`animated-logo-container ${className}`}
      style={{ width: size, height: "auto" }}
      initial={{ opacity: 0, y: -50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.34, 1.56, 0.64, 1], // springy bounce ease
        ...rest.transition,
      }}
      {...rest}
    >
      <Logo className="animated-logo-svg" />
    </motion.div>
  );
};

export default AnimatedLogo;

