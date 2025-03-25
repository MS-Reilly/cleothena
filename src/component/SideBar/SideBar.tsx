import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import "./styles.scss"; // Styles for the sidebar
import CloseIcon from "./../../Assets/icons/close.svg";
import hamburgerIcon from "./../../Assets/icons/hamburger.svg"; // Make sure this file exists
import { SideBarProps } from "./types";
import { useTheme } from "../../theme/hooks/useTheme";
import { lightenColor } from "../../utils/colorUtils";
import SimpleButton from "../SimpleButton/SimpleButton";

const SideBar: React.FC<SideBarProps> = ({
  logo,
  sidebarConfig = [],
  side = "left",
}) => {
  // Internal state for sidebar open/closed
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLImageElement>(null);
  let location;
  try {
    location = useLocation();
  } catch (err) {
    console.warn("SideBar rendered without <Router> context");
    return null; // Or fallback
  }

  const theme = useTheme() || {};

  // Close sidebar when clicking outside, except when clicking the hamburger icon.
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        hamburgerRef.current &&
        hamburgerRef.current.contains(event.target as Node)
      ) {
        return;
      }
      if (
        isMobileOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isMobileOpen]);

  // Close the sidebar on route change.
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Hamburger Icon displayed when sidebar is closed */}
      {!isMobileOpen && (
        <img
          src={hamburgerIcon}
          alt="hamburger menu"
          ref={hamburgerRef}
          className="hamburger-icon"
          style={{ height: "15px", width: "15px", cursor: "pointer" }}
          onClick={() => setIsMobileOpen(true)}
        />
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`sidebar ${
          isMobileOpen ? "mobile-open" : "mobile-closed"
        } sidebar-${side}`}
      >
        <div className="sidebar-header">
          <div className="logo">{logo}</div>
          <img
            src={CloseIcon}
            alt="close"
            className="close-btn"
            onClick={() => setIsMobileOpen(false)}
            style={{ height: "15px", width: "15px", cursor: "pointer" }}
          />
        </div>

        {/* Sidebar Content */}
        <div className="sidebar-content">
          {sidebarConfig.map((item, idx) => (
            <SidebarItem key={idx} item={item} isOpen={isMobileOpen} />
          ))}
        </div>

        {/* Sidebar Footer */}
        <div className="sidebar-footer">
          <div
            className="helper-card"
            style={{
              backgroundColor: lightenColor(theme.colors.secondary, 0.9),
            }}
          >
            <p>Necesitas Ayuda?</p>
            <span>Envianos un mensaje</span>
            <SimpleButton color="primary" variant="sm" title="¡Contactanos!" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
