import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import SettingsPage from "./SettingsPage";

const meta: Meta<typeof SettingsPage> = {
  title: "Pages/SettingsPage",
  component: SettingsPage,
  parameters: {
    layout: "fullscreen",
  },
};
export default meta;

type Story = StoryObj<typeof SettingsPage>;

export const Default: Story = {
  render: () => <SettingsPage />,
};
