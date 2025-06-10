// src/utils/iconLoaders.ts
import { theme } from "../theme/style/theme";
import type React from "react";

type IconModule = {
  default: React.FC<React.SVGProps<SVGSVGElement>>;
};

// NOTE: match only .svg, NOT .svg?component
const tsLoaders = import.meta.glob<IconModule>(
  "../assets/icons/interface-ts/fi-ts-*.svg"
);
const rrLoaders = import.meta.glob<IconModule>(
  "../assets/icons/interface-rr/fi-rr-*.svg"
);

export function getIconLoader(
  name: string
): (() => Promise<IconModule>) | undefined {
  const set = theme.icons.set; // "ts" or "rr"
  const prefix = `fi-${set}-`; // e.g. "fi-ts-"
  const map = set === "ts" ? tsLoaders : rrLoaders;

  // For debugging: log available keys
  const keys = Object.keys(map);
  console.log(`[getIcon] all ${set} keys:`, keys);

  // Find the loader whose filename ends with "fi-ts-<name>.svg"
  const targetSuffix = `${prefix}${name}.svg`;
  const matchKey = keys.find((k) => k.endsWith(targetSuffix));

  console.log(`[getIcon] looking for suffix ${targetSuffix} →`, matchKey);

  return matchKey ? map[matchKey] : undefined;
}
