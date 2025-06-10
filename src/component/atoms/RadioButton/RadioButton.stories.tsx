import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import RadioButton from "./RadioButton";
import { RadioButtonProps } from "./types";

const meta: Meta<RadioButtonProps> = {
  title: "Atoms/RadioButton",
  component: RadioButton,
  argTypes: {
    checked: { control: "boolean" },
    size: { control: "number" },
    disabled: { control: "boolean" },
    value: { control: "text" },
    name: { control: "text" },
    color: { control: "object" },
    className: { control: "text" },
    onChange: { action: "changed" },
  },
  parameters: {
    controls: { exclude: ["onChange"] },
  },
};
export default meta;

type Story = StoryObj<RadioButtonProps>;

// Template using useState for controlled checked value
const ControlledTemplate: React.FC<RadioButtonProps> = (args) => {
  const [checked, setChecked] = useState(args.checked ?? false);
  return (
    <RadioButton
      {...args}
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
  );
};

export const Default: Story = {
  render: (args) => <ControlledTemplate {...args} />,
  args: {
    name: "demo",
    value: "option1",
    checked: false,
    disabled: false,
    size: 20,
    color: {
      active: "#4CAF50",
      inactive: "#ccc",
      disabled: "#e0e0e0",
      disabledActive: "#a5d6a7",
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
      active: "#e91e63",
      inactive: "#f8bbd0",
      disabled: "#ffe0e0",
      disabledActive: "#ffc1c1",
    },
  },
};
