import React, { useState, useMemo } from "react";
import "./styles.scss";
import { SidebarItemConfig, SidebarItemProps } from "./types";
import { useTheme } from "../../theme/hooks/useTheme";
import { lightenColor } from "../../utils/colorUtils";
import { useSafeLocation } from "../../utils/useSafeLocation";
import { NavLink } from "react-router-dom";

const SidebarItem: React.FC<SidebarItemProps> = ({
  item,
  isOpen,
  itemStyle = {},
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useSafeLocation();
  const theme = useTheme() || {};

  const baseStyle = useMemo(
    () => ({
      backgroundColor: theme.colors.neutral?.white || "#ffffff",
      color: theme.colors.primary || theme.colors.neutral?.black || "#000000",
      fontFamily: theme.typography?.fontFamily || "Arial, sans-serif",
    }),
    [theme]
  );

  const isAnyChildActive = location
    ? item.children?.some((child) =>
        location.pathname.startsWith(child.href || "")
      )
    : false;

  const toggleExpand = (e: React.MouseEvent<HTMLDivElement>) => {
    if (item.disabled) return;
    if (item.children) {
      e.preventDefault();
      setIsExpanded((prev) => !prev);
    }
  };

  const Icon = item.icon;

  return (
    <div
      className="sidebar-item"
      style={{ ...baseStyle, ...itemStyle.wrapperStyle }}
    >
      {item.children ? (
        <div
          className={`item-header ${
            isAnyChildActive ? "active" : "notActive"
          } ${item.disabled ? "disabled" : ""}`}
          onClick={item.disabled ? undefined : toggleExpand}
          style={{
            cursor: item.disabled ? "not-allowed" : "pointer",
            backgroundColor: isAnyChildActive
              ? lightenColor(theme.colors.secondary, 0.1)
              : "transparent",
            display: "flex",
            alignItems: "center",
            padding: "10px 16px",
            borderRadius: 8,
            ...itemStyle.headerStyle,
          }}
        >
          <span
            className="icon"
            style={{ marginRight: 10, ...itemStyle.iconStyle }}
          >
            {Icon && (
              <Icon
                width={20}
                height={20}
                style={{
                  fill: isAnyChildActive
                    ? theme.colors.neutral.white
                    : theme.colors.accent,
                }}
              />
            )}
          </span>
          <span
            className="title"
            style={{
              color: isAnyChildActive
                ? theme.colors.neutral.white
                : theme.colors.neutral.grey,
              fontWeight: 600,
              ...itemStyle.titleStyle,
            }}
          >
            {item.label}
          </span>
          {isOpen && !item.disabled && (
            <span
              className="expand-icon"
              style={{
                marginLeft: "auto",
                color: isAnyChildActive
                  ? theme.colors.neutral.white
                  : theme.colors.neutral.grey,
                fontSize: "1rem",
                ...itemStyle.expandIconStyle,
              }}
            >
              {isExpanded ? "-" : "+"}
            </span>
          )}
        </div>
      ) : (
        <NavLink
          to={item.disabled ? "#" : item.href || "#"}
          className={({ isActive }) =>
            `item-header ${isActive ? "active" : "notActive"} ${
              item.disabled ? "disabled" : ""
            }`
          }
          style={({ isActive }) => ({
            cursor: item.disabled ? "not-allowed" : "pointer",
            backgroundColor: isActive
              ? lightenColor(theme.colors.secondary, 0.1)
              : "transparent",
            display: "flex",
            alignItems: "center",
            padding: "10px 16px",
            borderRadius: 8,
            textDecoration: "none",
            ...itemStyle.headerStyle,
          })}
          end
        >
          {({ isActive }) => (
            <>
              <span
                className="icon"
                style={{ marginRight: 10, ...itemStyle.iconStyle }}
              >
                {Icon && (
                  <Icon
                    width={18}
                    height={18}
                    style={{
                      fill: isActive
                        ? theme.colors.neutral.white
                        : theme.colors.accent,
                    }}
                  />
                )}
              </span>
              <span
                className="title"
                style={{
                  color: isActive
                    ? theme.colors.neutral.white
                    : theme.colors.neutral.grey,
                  fontWeight: 600,
                  ...itemStyle.titleStyle,
                }}
              >
                {item.label}
              </span>
            </>
          )}
        </NavLink>
      )}

      {isExpanded && isOpen && item.children && !item.disabled && (
        <ul className="sub-items">
          {item.children.map((child, index) => (
            <li key={index} className="sub-item">
              <NavLink
                to={child.disabled ? "#" : child.href || "#"}
                className={({ isActive }) =>
                  `sub-item-link ${isActive ? "active" : "notActive"} ${
                    child.disabled ? "disabled" : ""
                  }`
                }
                style={({ isActive }) => ({
                  pointerEvents: child.disabled ? "none" : "auto",
                  color: child.disabled
                    ? "#b0b0b0"
                    : isActive
                    ? theme.colors.neutral.white
                    : theme.colors.neutral.grey,
                  backgroundColor: isActive
                    ? lightenColor(theme.colors.secondary, 0.1)
                    : "transparent",
                  padding: "8px 12px",
                  borderRadius: 6,
                  fontSize: "0.92rem",
                  textDecoration: "none",
                  ...itemStyle.subItemLinkStyle,
                })}
                end
              >
                <span
                  className="sub-title"
                  style={{
                    color: child.disabled
                      ? "#b0b0b0"
                      : theme.colors.neutral.grey,
                    ...itemStyle.subTitleStyle,
                  }}
                >
                  {child.label}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SidebarItem;
