import React, { useState, useEffect, useMemo } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../../theme/hooks/useTheme";
import { useSafeLocation } from "../../utils/useSafeLocation";
import { NavbarProps, NavStyle } from "./types";

import "./styles.scss";

const ActiveAwareLink: React.FC<{ to: string; children: React.ReactNode }> = ({
  to,
  children,
}) => (
  <NavLink to={to} end className="nav-link" style={{ textDecoration: "none" }}>
    {({ isActive }) => (
      <span data-active={isActive ? "true" : "false"}>{children}</span>
    )}
  </NavLink>
);

const Navbar: React.FC<NavbarProps> = ({
  logo,
  links = [],
  navStyle = {} as NavStyle,
  position = "sticky",
  className = "",
  endElements, // 👈 custom content injected by parent
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const theme = useTheme() || {};

  const {
    link: linkColor = "#000",
    linkHover: linkHoverColor = "#133E87",
    linkActive: activeLinkColor = "#7AE2CF",
    subLink: subLinkColor = linkColor,
    bg: navBg = theme.colors?.neutral?.white,
    shadow: navShadow = navStyle.shadow ??
      theme.shadows?.md ??
      "0 2px 5px rgba(0,0,0,.12)",
  } = navStyle;

  const navbarStyles = useMemo(
    () =>
      ({
        "--link-color": linkColor,
        "--link-hover-color": linkHoverColor,
        "--link-active-color": activeLinkColor,
        "--sub-link-color": subLinkColor,
        "--navbar-bg": navBg,
        "--navbar-shadow": navShadow,
        backgroundColor: navBg,
        color: linkColor,
        boxShadow: navShadow,
        fontFamily: theme.typography?.fontFamily || "Arial, sans-serif",
        position,
        top: 0,
        width: "100%",
        zIndex: 100,
      } as React.CSSProperties & Record<string, string>),
    [
      linkColor,
      linkHoverColor,
      activeLinkColor,
      subLinkColor,
      navBg,
      navShadow,
      position,
      theme.typography?.fontFamily,
    ]
  );

  const location = useSafeLocation();
  if (!location) console.warn("⚠️ Navbar rendered without router context.");

  return (
    <nav className={`navbar ${className}`} style={navbarStyles}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          {logo}
        </Link>

        {/* Desktop links */}
        {!isMobile && (
          <div className="navbar-links">
            {links.map((link) => (
              <div key={link.label} className="navbar-item">
                <ActiveAwareLink to={link.href}>{link.label}</ActiveAwareLink>
                {link.children && (
                  <div className="navbar-dropdown">
                    {link.children.map((child) => (
                      <ActiveAwareLink key={child.label} to={child.href}>
                        {child.label}
                      </ActiveAwareLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Custom end elements */}
        {!isMobile && endElements && (
          <div className="navbar-end-elements">{endElements}</div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
