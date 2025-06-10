// src/components/atoms/PlainIcon/PlainIcon.tsx
import React, { FC, Suspense, lazy } from "react";
import styles from "./PlainIcon.module.scss";
import { getIconLoader } from "../../../utils/iconLoaders";
import { PlainIconProps } from "./types";

const PlainIcon: FC<PlainIconProps> = ({
  name,
  size = 24,
  color = "inherit",
  className = "",
}) => {
  const loader = getIconLoader(name);
  if (!loader) {
    console.warn(`[PlainIcon] no loader found for icon "${name}"`);
    return null;
  }
  const Icon = lazy(loader);

  return (
    <Suspense fallback={null}>
      <div
        className={`${styles.iconWrapper} ${className}`}
        style={{ width: size, height: size, color }}
      >
        <Icon className={styles.svgIcon} />
      </div>
    </Suspense>
  );
};

export default PlainIcon;
