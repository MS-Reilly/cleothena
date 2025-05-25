import React, { useState, useMemo } from "react";
import "./styles.scss";
import { SidebarItemConfig } from "./types";
import { useTheme } from "../../theme/hooks/useTheme";
import { lightenColor } from "../../utils/colorUtils";
import { useSafeLocation } from "../../utils/useSafeLocation";
import { NavLink } from "react-router-dom";

interface SidebarItemStyle {
  wrapper?: string;
  header?: string;
  link?: string;
  icon?: string;
  title?: string;
  expandIcon?: string;
  subItemLink?: string;
  subTitle?: string;
}

interface SidebarItemProps {
  item: SidebarItemConfig;
  isOpen: boolean;
  linkClassName?: string;
  itemStyle?: SidebarItemStyle;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  item,
  isOpen,
  linkClassName = "",
  itemStyle = {},
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useSafeLocation();
  const theme = useTheme() || {};

  const styles = useMemo(
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
    <div className={`sidebar-item ${itemStyle.wrapper || ""}`} style={styles}>
      {item.children ? (
        <div
          className={`item-header ${itemStyle.header || ""} ${
            isAnyChildActive ? "active" : "notActive"
          } ${item.disabled ? "disabled" : ""}`}
          onClick={item.disabled ? undefined : toggleExpand}
          style={{
            cursor: item.disabled ? "not-allowed" : "pointer",
            backgroundColor: isAnyChildActive
              ? lightenColor(theme.colors.secondary, 0.1)
              : "transparent",
          }}
        >
          <span className={`icon ${itemStyle.icon || ""}`}>
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
            className={`title ${itemStyle.title || ""}`}
            style={{
              color: isAnyChildActive
                ? theme.colors.neutral.white
                : theme.colors.neutral.grey,
            }}
          >
            {item.label}
          </span>
          {isOpen && !item.disabled && (
            <span
              className={`expand-icon ${itemStyle.expandIcon || ""}`}
              style={{
                color: isAnyChildActive
                  ? theme.colors.neutral.white
                  : theme.colors.neutral.grey,
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
            `item-header ${itemStyle.header || ""} ${linkClassName} ${
              isActive ? "active" : "notActive"
            } ${item.disabled ? "disabled" : ""}`
          }
          style={({ isActive }) => ({
            cursor: item.disabled ? "not-allowed" : "pointer",
            backgroundColor: isActive
              ? lightenColor(theme.colors.secondary, 0.1)
              : "transparent",
          })}
          end
        >
          {({ isActive }) => (
            <>
              <span className={`icon ${itemStyle.icon || ""}`}>
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
                className={`title ${itemStyle.title || ""}`}
                style={{
                  color: isActive
                    ? theme.colors.neutral.white
                    : theme.colors.neutral.grey,
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
          {item.children.map((child, index: number) => (
            <li key={index} className="sub-item">
              <NavLink
                to={child.disabled ? "#" : child.href || "#"}
                className={({ isActive }) =>
                  `sub-item-link ${itemStyle.subItemLink || ""} ${
                    isActive ? "active" : "notActive"
                  } ${child.disabled ? "disabled" : ""}`
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
                })}
                end
              >
                <span
                  className={`sub-title ${itemStyle.subTitle || ""}`}
                  style={{
                    color: child.disabled
                      ? "#b0b0b0"
                      : theme.colors.neutral.grey,
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
