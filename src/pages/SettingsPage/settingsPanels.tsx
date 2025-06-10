import React, { useState } from "react";
import { SettingsPanel } from "../../component/organisms";
import { Button } from "../../component/atoms";

// Section keys & labels for sidebar/tabs
export const SECTION_KEYS = [
  "profile",
  "security",
  "notifications",
  "privacy",
  "appearance",
  "billing",
  "integrations",
  "accessibility",
  "general",
] as const;
export type SectionKey = (typeof SECTION_KEYS)[number];

export const SECTION_LABELS: Record<SectionKey, string> = {
  profile: "Profile",
  security: "Security",
  notifications: "Notifications",
  privacy: "Privacy",
  appearance: "Appearance",
  billing: "Billing",
  integrations: "Integrations",
  accessibility: "Accessibility",
  general: "General",
};

// Main state hook for all settings
export function useAllSettingsState() {
  // Profile
  const [avatar, setAvatar] = useState<string | null>(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  // Security
  const [twoFA, setTwoFA] = useState(false);
  const [password, setPassword] = useState("");
  // ... (more states as needed)

  // Notifications
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [pushAlerts, setPushAlerts] = useState(false);

  // Privacy
  const [profileVisible, setProfileVisible] = useState(true);
  const [allowTracking, setAllowTracking] = useState(false);

  // Appearance
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState("medium");

  // Billing
  const [billingEmail, setBillingEmail] = useState(email);

  // Integrations
  const [githubConnected, setGithubConnected] = useState(false);

  // Accessibility
  const [reducedMotion, setReducedMotion] = useState(false);

  // General
  // ... (add as needed)

  // Return all state and setters for panel construction
  return {
    // Profile
    avatar,
    setAvatar,
    username,
    setUsername,
    email,
    setEmail,
    // Security
    twoFA,
    setTwoFA,
    password,
    setPassword,
    // Notifications
    emailAlerts,
    setEmailAlerts,
    pushAlerts,
    setPushAlerts,
    // Privacy
    profileVisible,
    setProfileVisible,
    allowTracking,
    setAllowTracking,
    // Appearance
    darkMode,
    setDarkMode,
    fontSize,
    setFontSize,
    // Billing
    billingEmail,
    setBillingEmail,
    // Integrations
    githubConnected,
    setGithubConnected,
    // Accessibility
    reducedMotion,
    setReducedMotion,
    // ...add more
  };
}

// Panels builder function
export function buildPanels(settings: ReturnType<typeof useAllSettingsState>) {
  return {
    profile: (
      <SettingsPanel
        title="Profile"
        items={[
          {
            key: "avatar",
            label: "Avatar",
            type: "custom",
            customElement: (
              <div>
                {/* Add avatar upload UI */}
                <img
                  src={settings.avatar ?? "/avatar-default.png"}
                  alt="Avatar"
                  style={{ width: 48, borderRadius: "50%" }}
                />
                {/* ...Upload button */}
              </div>
            ),
          },
          {
            key: "username",
            label: "Username",
            type: "input",
            value: settings.username,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
              settings.setUsername(e.target.value),
          },
          {
            key: "email",
            label: "Email",
            type: "input",
            value: settings.email,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
              settings.setEmail(e.target.value),
          },
          // ...more fields
        ]}
      />
    ),
    security: (
      <SettingsPanel
        title="Security"
        items={[
          {
            key: "twoFA",
            label: "Enable 2FA",
            type: "toggle",
            value: settings.twoFA,
            onChange: settings.setTwoFA,
            helpText: "Adds extra protection for your account.",
          },
          // ...add password field, device management, etc.
        ]}
      />
    ),
    notifications: (
      <SettingsPanel
        title="Notifications"
        items={[
          {
            key: "email_alerts",
            label: "Email alerts",
            type: "toggle",
            value: settings.emailAlerts,
            onChange: settings.setEmailAlerts,
          },
          {
            key: "push_alerts",
            label: "Push notifications",
            type: "toggle",
            value: settings.pushAlerts,
            onChange: settings.setPushAlerts,
          },
        ]}
      />
    ),
    privacy: (
      <SettingsPanel
        title="Privacy"
        items={[
          {
            key: "profile_visible",
            label: "Profile visible",
            type: "toggle",
            value: settings.profileVisible,
            onChange: settings.setProfileVisible,
          },
          {
            key: "allow_tracking",
            label: "Allow tracking",
            type: "checkbox",
            value: settings.allowTracking,
            onChange: settings.setAllowTracking,
          },
        ]}
      />
    ),
    appearance: (
      <SettingsPanel
        title="Appearance"
        items={[
          {
            key: "dark_mode",
            label: "Dark mode",
            type: "toggle",
            value: settings.darkMode,
            onChange: settings.setDarkMode,
          },
          {
            key: "font_size",
            label: "Font size",
            type: "custom",
            customElement: (
              <select
                value={settings.fontSize}
                onChange={(e) => settings.setFontSize(e.target.value)}
                style={{ padding: 5, borderRadius: 4 }}
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            ),
          },
        ]}
      />
    ),
    billing: (
      <SettingsPanel
        title="Billing"
        items={[
          {
            key: "billing_email",
            label: "Billing Email",
            type: "input",
            value: settings.billingEmail,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
              settings.setBillingEmail(e.target.value),
          },
          // ...add payment method, invoices, etc.
        ]}
      />
    ),
    integrations: (
      <SettingsPanel
        title="Integrations"
        items={[
          {
            key: "github_connected",
            label: "GitHub",
            type: "toggle",
            value: settings.githubConnected,
            onChange: settings.setGithubConnected,
            helpText: settings.githubConnected
              ? "Connected to GitHub."
              : "Not connected.",
          },
          // ...add other integrations
        ]}
      />
    ),
    accessibility: (
      <SettingsPanel
        title="Accessibility"
        items={[
          {
            key: "reduced_motion",
            label: "Reduced motion",
            type: "toggle",
            value: settings.reducedMotion,
            onChange: settings.setReducedMotion,
          },
          // ...add high contrast, screen reader, etc.
        ]}
      />
    ),
    general: (
      <SettingsPanel
        title="General"
        items={[
          {
            key: "app_version",
            label: "App version",
            type: "custom",
            customElement: <span>v1.0.0</span>,
          },
          {
            key: "feedback",
            type: "custom",
            customElement: (
              <Button
                size={{ buttonWidth: 180 }}
                style={{ marginTop: 12 }}
                onClick={() => alert("Feedback dialog!")}
              >
                Send Feedback
              </Button>
            ),
          },
        ]}
      />
    ),
  };
}
