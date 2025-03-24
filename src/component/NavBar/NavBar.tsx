import React, { useState, useMemo, useEffect } from "react";
import { useTheme } from "../../theme/hooks/useTheme";
import { NavbarProps } from "./types";
import "./styles.scss";
import { NavLink, Link } from "react-router-dom";
import SimpleButton from "../SimpleButton/SimpleButton";
import SideBar from "../SideBar/SideBar";

const Navbar: React.FC<NavbarProps> = ({
  logo,
  links = [],
  position = "sticky",
  className = "",
  ghost = false,
  sideBarSide = "left",
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Detect window resize and update isMobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMobileOpen(false); // Ensure mobile menu closes when switching back to desktop
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Default theme colors if missing from theme provider
  const theme = useTheme() || {};

  const navbarStyles = useMemo(
    () => ({
      backgroundColor: ghost ? "transparent" : theme.colors.neutral?.white,
      color: theme.colors.primary || theme.colors.neutral?.black || "#000000",
      boxShadow: ghost
        ? "none"
        : theme.shadows?.md || "0 2px 5px rgba(0,0,0,0.3)",
      fontFamily: theme.typography?.fontFamily || "Arial, sans-serif",
      zIndex: ghost ? 0 : 50,
      position:
        position === "fixed"
          ? "fixed"
          : position === "sticky"
          ? "sticky"
          : "static",
      top: 0,
      width: "100%",
    }),
    [theme, position, ghost]
  );

  return (
    <nav className={`navbar ${className}`} style={navbarStyles}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/">
          <div className="navbar-logo">{logo}</div>
        </Link>

        {/* Desktop Navigation (Only Visible on Desktop) */}
        {!isMobile && (
          <div className="navbar-links">
            {links.map((link) => (
              <div key={link.label} className="navbar-item">
                <NavLink
                  to={link.href}
                  className={"nav-link"}
                  style={({ isActive }) => ({
                    color: isActive
                      ? navbarStyles.color
                      : theme.colors.neutral?.grey,
                    fontWeight: isActive ? "bold" : "normal",
                    textDecoration: "none",
                  })}
                >
                  {link.label}
                </NavLink>
                {link.children && (
                  <div className="navbar-dropdown">
                    {link.children.map((child) => (
                      <NavLink
                        key={child.label}
                        to={child.href}
                        end
                        className={"nav-link"}
                        style={({ isActive }) => ({
                          color: isActive
                            ? navbarStyles.color
                            : theme.colors.neutral?.grey,
                          fontWeight: isActive ? "bold" : "normal",
                          textDecoration: "none",
                        })}
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <SimpleButton
              title="Sign Up"
              color="secondary"
              outline={true}
              variant={"sm"}
            />
            <SimpleButton title="Sign In" color="primary" variant={"sm"} />
          </div>
        )}

        {/* Mobile Menu Toggle (Only Visible on Mobile) */}
        {isMobile && (
          <div className="flex">
            <SideBar logo={logo} sidebarConfig={links} side={sideBarSide} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
