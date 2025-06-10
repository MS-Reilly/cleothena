import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import ToggleSwitch from "./ToggleSwitch";
import { ToggleSwitchProps } from "./types";

const meta: Meta<ToggleSwitchProps> = {
  title: "Atoms/ToggleSwitch",
  component: ToggleSwitch,
  argTypes: {
    checked: { control: "boolean" },
    size: { control: "number" },
    disabled: { control: "boolean" },
    color: { control: "object" },
    className: { control: "text" },
    onChange: { action: "changed" },
  },
  parameters: {
    controls: { exclude: ["onChange"] },
  },
};
export default meta;

type Story = StoryObj<ToggleSwitchProps>;

const ControlledTemplate: React.FC<ToggleSwitchProps> = (args) => {
  const [checked, setChecked] = useState(args.checked ?? false);
  return (
    <ToggleSwitch
      {...args}
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
  );
};

export const Default: Story = {
  render: (args) => <ControlledTemplate {...args} />,
  args: {
    checked: false,
    disabled: false,
    size: 40,
    color: {
      active: "#4CAF50",
      inactive: "#EAEFEF",
      disabled: "#F0F0F0",
      knob: "#FFFFFF",
    },
  },
};

export const Checked: Story = {
  render: (args) => <ControlledTemplate {...args} />,
  args: {
    ...Default.args,
    checked: true,
  },
};

export const Disabled: Story = {
  render: (args) => <ControlledTemplate {...args} />,
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const CustomColors: Story = {
  render: (args) => <ControlledTemplate {...args} />,
  args: {
    ...Default.args,
    color: {
      active: "#1976d2",
      inactive: "#c5cae9",
      disabled: "#f8bbd0",
      knob: "#fffde7",
    },
  },
};
