import React, { useContext } from "react";
import {
  Link,
  LinkProps,
  UNSAFE_LocationContext as LocationContext,
} from "react-router-dom";

// Same props as Link
export const SafeLink: React.FC<LinkProps> = ({ to, children, ...rest }) => {
  const routerContext = useContext(LocationContext);

  if (!routerContext) {
    console.warn("⚠️ <SafeLink> used outside <BrowserRouter>. Rendering <span> fallback.");
    return <span {...rest}>{children}</span>;
  }

  return (
    <Link to={to} {...rest}>
      {children}
    </Link>
  );
};
