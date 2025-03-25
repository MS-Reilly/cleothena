// src/utils/useSafeLocation.ts
import { useContext } from "react";
import { UNSAFE_LocationContext as LocationContext, useLocation } from "react-router-dom";

export const useSafeLocation = () => {
  const context = useContext(LocationContext);
  return context ? useLocation() : null;
};
