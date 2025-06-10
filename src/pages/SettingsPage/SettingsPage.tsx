import React, { useState } from "react";
import styles from "./SettingsPage.module.scss";
import {
  SECTION_KEYS,
  SECTION_LABELS,
  useAllSettingsState,
  buildPanels,
  SectionKey,
} from "./settingsPanels";
import SideBar from "../../component/old/SideBar/SideBar";
import { useTheme } from "../../theme/hooks/useTheme";

const SettingsPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionKey>(
    SECTION_KEYS[0]
  );
  const settings = useAllSettingsState();
  const panels = buildPanels(settings);
  const theme = useTheme();

  const defaultSidebarConfig = [
    { label: "Home", href: "/", icon: "" },
    {
      label: "Services",
      href: "#",
      icon: "",
      children: [
        { label: "Hosting", href: "/services/hosting" },
        { label: "Design", href: "/services/design" },
      ],
    },
    {
      label: "Settings",
      href: "#",
      icon: "",
      children: [
        { label: "Account", href: "/settings/account" },
        { label: "Security", href: "/settings/security" },
      ],
    },
  ];

  return (
    <div className={styles.settingsRoot}>
      <SideBar side="left" sideBarStyle={{ bg: theme.colors.primary }} />
      <aside className={styles.sidebar} aria-label="Settings navigation">
        {SECTION_KEYS.map((section) => (
          <button
            key={section}
            className={`${styles.sectionTab} ${
              activeSection === section ? styles.active : ""
            }`}
            onClick={() => setActiveSection(section)}
            type="button"
            aria-current={activeSection === section ? "page" : undefined}
          >
            {SECTION_LABELS[section]}
          </button>
        ))}
      </aside>
      <main className={styles.mainContent}>{panels[activeSection]}</main>
    </div>
  );
};

export default SettingsPage;
