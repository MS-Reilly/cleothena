import React, { useState, useEffect, useMemo } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../../theme/hooks/useTheme";
import { useSafeLocation } from "../../utils/useSafeLocation";
import { NavbarProps, NavStyle } from "./types";

import SimpleButton from "../SimpleButton/SimpleButton";
import SideBar from "../SideBar/SideBar";

import "./styles.scss";

/*────────────────────────────────────────────────────────
  Helper: keeps active state in data-attribute
────────────────────────────────────────────────────────*/
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
  ghost = false,
}) => {
  /* ───────────── responsive toggle ───────────── */
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* ─────────────── design tokens ─────────────── */
  const theme = useTheme() || {};

  const {
    link: linkColor = "#000",
    linkHover: linkHoverColor = "#133E87",
    linkActive: activeLinkColor = "#7AE2CF",
    subLink: subLinkColor = linkColor, // fallback
    bg: navBg = ghost ? "transparent" : theme.colors?.neutral?.white,
    shadow: navShadow = navStyle.shadow ??
      theme.shadows?.md ??
      "0 2px 5px rgba(0,0,0,.12)",
  } = navStyle;

  /* ───────── inline styles & CSS vars ────────── */
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
        boxShadow: ghost ? "none" : navShadow,
        fontFamily: theme.typography?.fontFamily || "Arial, sans-serif",
        position,
        top: 0,
        width: "100%",
        zIndex: ghost ? 0 : 50,
      } as React.CSSProperties & Record<string, string>),
    [
      linkColor,
      linkHoverColor,
      activeLinkColor,
      subLinkColor,
      navBg,
      navShadow,
      ghost,
      position,
      theme.typography?.fontFamily,
    ]
  );

  /* warn if outside <Router> (Storybook) */
  const location = useSafeLocation();
  if (!location) console.warn("⚠️  Navbar rendered without router context.");

  /* ─────────────────── markup ─────────────────── */
  return (
    <nav className={`navbar ${className}`} style={navbarStyles}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          {logo}
        </Link>

        {/* Desktop navigation */}
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

            {/* CTA buttons */}
            <SimpleButton
              title="Sign Up"
              color="secondary"
              outline
              variant="sm"
            />
            <SimpleButton title="Sign In" color="primary" variant="sm" />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
