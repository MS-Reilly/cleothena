import React, { useEffect, useRef, useState, useMemo } from "react";
import SidebarItem from "./SidebarItem";
import "./styles.scss";
import CloseIcon from "./../../Assets/icons/close.svg";
import HamburgerIcon from "./../../Assets/icons/hamburger.svg";
import { SideBarProps } from "./types";
import { useTheme } from "../../theme/hooks/useTheme";
import { useSafeLocation } from "../../utils/useSafeLocation";

const SideBar: React.FC<SideBarProps> = ({
  logo,
  sidebarConfig = [],
  side = "right",
  hamburgerStyle = { height: "25px", width: "25px", cursor: "pointer" },
  hamburgerFill = "#000000",
  className = "",
  sideBarStyle = {},
  navBarStyle = {},
  footerContent,
  itemStyle,
}) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<any>(null);
  const location = useSafeLocation();
  const theme = useTheme() || {};

  const {
    bg = theme.colors?.neutral?.white || "#fff",
    link = "#000",
    shadow = theme.shadows?.md || "0 2px 8px rgba(0,0,0,0.1)",
    borderRadius = "0px",
    padding = "1rem",
    width = "260px",
  } = sideBarStyle;

  const sidebarStyles: React.CSSProperties = {
    backgroundColor: bg,
    color: link,
    boxShadow: shadow,
    borderRadius,
    padding,
    width,
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        hamburgerRef.current?.contains(event.target as Node) ||
        !isMobileOpen
      ) {
        return;
      }

      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isMobileOpen]);

  useEffect(() => {
    if (location) {
      setIsMobileOpen(false);
    }
  }, [location?.pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Navigation Bar */}
      {!isMobileOpen && (
        <div
          className={`nav-style nav-style-${side}`}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.75rem 1rem",
            backgroundColor: "#fff",
            boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
            ...navBarStyle,
          }}
        >
          <div className="nav-hamburger">
            <HamburgerIcon
              ref={hamburgerRef}
              style={hamburgerStyle}
              onClick={() => setIsMobileOpen(true)}
              fill={hamburgerFill}
              role="button"
              aria-label="Open sidebar"
            />
          </div>
          <div className="nav-logo">{logo}</div>
        </div>
      )}

      {/* Sidebar Drawer */}
      <div
        ref={sidebarRef}
        className={`sidebar ${
          isMobileOpen ? "mobile-open" : "mobile-closed"
        } sidebar-${side} ${className}`}
        style={sidebarStyles}
      >
        <div className="sidebar-header">
          <div className="logo">{logo}</div>
          <CloseIcon
            className="close-btn"
            onClick={() => setIsMobileOpen(false)}
            style={{ height: "20px", width: "20px", cursor: "pointer" }}
            role="button"
            aria-label="Close sidebar"
          />
        </div>

        <div className="sidebar-content">
          {(Array.isArray(sidebarConfig) ? sidebarConfig : []).map(
            (item, idx) => (
              <SidebarItem
                key={idx}
                item={item}
                isOpen={isMobileOpen}
                itemStyle={itemStyle}
              />
            )
          )}
        </div>

        {footerContent && <div className="sidebar-footer">{footerContent}</div>}
      </div>
    </>
  );
};

export default SideBar;
