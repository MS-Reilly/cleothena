import React from "react";
import styles from "./SettingsPanel.module.scss";
import { SettingsPanelProps } from "./types";
import { ToggleField, TooltipIcon } from "../../molecules";
import { Checkbox, Label } from "../../atoms"; // or from "../../atoms" if you have those atoms
import { useTheme } from "../../../theme/hooks/useTheme";

const SettingsPanel: React.FC<SettingsPanelProps> = ({
  items,
  title,
  children,
  className = "",
}) => {
  const theme = useTheme();
  const fontFamily = theme.typography?.fontFamily || "inherit";

  return (
    <div
      className={`${styles.settingsPanel} ${className}`}
      style={{ fontFamily }}
    >
      {title && <div className={styles.title}>{title}</div>}
      <div className={styles.items}>
        {items.map((item) => {
          if (item.type === "toggle") {
            return (
              <ToggleField
                key={item.key}
                label={item.label}
                checked={item.value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  item.onChange?.(e.target.checked)
                }
                tooltipProps={
                  item.tooltip
                    ? { content: item.tooltip, position: "bottom" }
                    : undefined
                }
                helpText={item.helpText}
                disabled={item.disabled}
              />
            );
          }
          if (item.type === "checkbox") {
            return (
              <div
                key={item.key}
                style={{ display: "flex", alignItems: "center", gap: 10 }}
              >
                <Checkbox
                  checked={item.value}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    item.onChange?.(e.target.checked)
                  }
                  disabled={item.disabled}
                  name={item.key}
                />
                <Label>{item.label}</Label>
                {item.tooltip && (
                  <TooltipIcon
                    iconName="info"
                    tooltipProps={{ content: item.tooltip, position: "bottom" }}
                    iconProps={{
                      colors: {
                        backgroundColor: "transparent",
                        iconColor: theme.colors.primary,
                      },
                      size: 35,
                    }}
                  />
                )}
                {item.helpText && (
                  <span
                    style={{ color: "#888", marginLeft: 8, fontSize: "0.93em" }}
                  >
                    {item.helpText}
                  </span>
                )}
              </div>
            );
          }
          if (item.type === "custom" && item.customElement) {
            return <div key={item.key}>{item.customElement}</div>;
          }
          return null;
        })}
      </div>
      {children && <div className={styles.footer}>{children}</div>}
    </div>
  );
};

export default SettingsPanel;
