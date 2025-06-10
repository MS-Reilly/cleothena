// types.ts
export type SectionKey = "notifications" | "privacy" | "account";

export interface SettingsPageProps {
  /** Optional: start on a specific section */
  initialSection?: SectionKey;
}
