import React, { useEffect, useRef, useState } from "react";
import SidebarItem from "./SidebarItem";
import "./styles.scss"; // Styles for the sidebar
import CloseIcon from "./../../Assets/icons/close.svg";
import HamburgerIcon from "./../../Assets/icons/hamburger.svg"; // Make sure this file exists
import { SideBarProps } from "./types";
import { useTheme } from "../../theme/hooks/useTheme";
import { lightenColor } from "../../utils/colorUtils";
import SimpleButton from "../SimpleButton/SimpleButton";
import { useSafeLocation } from "../../utils/useSafeLocation";

const SideBar: React.FC<SideBarProps> = ({
  logo,
  sidebarConfig = [],
  side = "left",
  hamburgerStyle ={ height: "25px", width: "25px", cursor: "pointer" },
  hamburgerFill = "#000000",
}) => {
  // Internal state for sidebar open/closed
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<any>(null);
  const location = useSafeLocation();
    if (!location) {
      console.warn("⚠️ SideBar is rendered without router context.");
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
    if (location) {
      setIsMobileOpen(false);
    }
  }, [location?.pathname]);

  return (
    <>
      {/* Hamburger Icon displayed when sidebar is closed */}
      {!isMobileOpen && (
        <HamburgerIcon
          className="hamburger-icon"
          style={hamburgerStyle}
          onClick={() => setIsMobileOpen(true)}
          fill={hamburgerFill}
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
          <CloseIcon
            className="close-btn"
            onClick={() => setIsMobileOpen(false)}
            style={{ height: "20px", width: "20px", cursor: "pointer" }}
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
