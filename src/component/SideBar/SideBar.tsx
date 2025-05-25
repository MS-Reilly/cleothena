import React, { useEffect, useRef, useState } from "react";
import SidebarItem from "./SidebarItem";
import "./styles.scss";
import CloseIcon from "./../../Assets/icons/close.svg";
import HamburgerIcon from "./../../Assets/icons/hamburger.svg";
import { SideBarProps } from "./types";
import { useTheme } from "../../theme/hooks/useTheme";
import { lightenColor } from "../../utils/colorUtils";
import SimpleButton from "../SimpleButton/SimpleButton";
import { useSafeLocation } from "../../utils/useSafeLocation";

const SideBar: React.FC<SideBarProps> = ({
  logo,
  sidebarConfig = [],
  side = "left",
  hamburgerStyle = { height: "25px", width: "25px", cursor: "pointer" },
  hamburgerFill = "#000000",
}) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<any>(null);
  const location = useSafeLocation();

  const theme = useTheme() || {};

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

  return (
    <>
      {/* Hamburger Icon */}
      {!isMobileOpen && (
        <HamburgerIcon
          ref={hamburgerRef}
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

        <div className="sidebar-content">
          {(Array.isArray(sidebarConfig) ? sidebarConfig : []).map(
            (item, idx) => (
              <SidebarItem key={idx} item={item} isOpen={isMobileOpen} />
            )
          )}
        </div>

        <div className="sidebar-footer">
          <div
            className="helper-card"
            style={{
              backgroundColor: lightenColor(
                theme.colors?.secondary || "#ccc",
                0.9
              ),
            }}
          >
            <p>¿Necesitas Ayuda?</p>
            <span>Envíanos un mensaje</span>
            <SimpleButton color="primary" variant="sm" title="¡Contáctanos!" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
