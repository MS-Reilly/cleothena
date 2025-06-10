// Checkbox.stories.tsx
import React from "react";
import { Meta, Story } from "@storybook/react";
import Checkbox from "./Checkbox";
import { CheckboxProps } from "./types";

export default {
  title: "Atoms/Checkbox",
  component: Checkbox,
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    size: { control: "number" },
    color: { control: "object" },
    label: { control: "text" },
    labelColor: { control: "color" },
    onChange: { action: "changed" },
  },
} as Meta<CheckboxProps>;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Checkbox Label",
  checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
  label: "Checked",
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled",
  disabled: true,
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  label: "Disabled & Checked",
  disabled: true,
  checked: true,
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  label: "Custom Colors",
  color: {
    active: "#007ACC",
    inactive: "#ECECEC",
    disabled: "#DDDDDD",
    disabledActive: "#555555",
  },
};

export const Large = Template.bind({});
Large.args = {
  label: "Large Checkbox",
  size: 32,
};
