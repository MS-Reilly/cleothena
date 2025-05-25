import React, { useEffect, useRef, useState, useMemo } from "react";
import SidebarItem from "./SidebarItem";
import "./styles.scss";
import CloseIcon from "./../../Assets/icons/close.svg";
import HamburgerIcon from "./../../Assets/icons/hamburger.svg";
import { SideBarProps, SideBarStyle } from "./types";
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
  className = "",
  sideBarStyle = {} as SideBarStyle,
  footerContent,
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
  } = sideBarStyle;

  const sidebarStyles = useMemo(
    () =>
      ({
        "--sidebar-bg": bg,
        "--sidebar-shadow": shadow,
        backgroundColor: bg,
        color: link,
        boxShadow: shadow,
      } as React.CSSProperties & Record<string, string>),
    [bg, link, shadow]
  );

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
      {!isMobileOpen && (
        <HamburgerIcon
          ref={hamburgerRef}
          className="hamburger-icon"
          style={hamburgerStyle}
          onClick={() => setIsMobileOpen(true)}
          fill={hamburgerFill}
        />
      )}

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
          />
        </div>

        <div className="sidebar-content">
          {(Array.isArray(sidebarConfig) ? sidebarConfig : []).map(
            (item, idx) => (
              <SidebarItem key={idx} item={item} isOpen={isMobileOpen} />
            )
          )}
        </div>

        <div className="sidebar-footer">{footerContent}</div>
      </div>
    </>
  );
};

export default SideBar;
