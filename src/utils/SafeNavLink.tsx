import React, { useContext } from "react";
import {
  NavLink,
  NavLinkProps,
  UNSAFE_LocationContext as LocationContext,
} from "react-router-dom";

// This SafeNavLink avoids crashing when router context is missing
export const SafeNavLink: React.FC<NavLinkProps> = ({
  to,
  children,
  className,
  style,
  ...rest
}) => {
  const routerContext = useContext(LocationContext);

  if (!routerContext) {
    console.warn("⚠️ <SafeNavLink> used outside <BrowserRouter>. Rendering <span> fallback.");

    return (
      <span
        className={
          typeof className === "function" ? className({ isActive: false, isPending: false, isTransitioning: false }) : className
        }
        style={typeof style === "function" ? style({ isActive: false, isPending: false, isTransitioning: false }) : style}
        {...rest}
      >
        {children}
      </span>
    );
  }

  return (
    <NavLink
      to={to}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </NavLink>
  );
};
