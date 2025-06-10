import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import ToggleField from "./ToggleField";
import { ToggleFieldProps } from "./types";

const meta: Meta<ToggleFieldProps> = {
  title: "Molecules/ToggleField",
  component: ToggleField,
  argTypes: {
    label: { control: "text" },
    helpText: { control: "text" },
    labelPosition: {
      control: "select",
      options: ["left", "right"],
    },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    size: { control: "number" },
    className: { control: "text" },
    // Remove direct labelColor/tooltip
    labelProps: { control: false },
    tooltipProps: { control: false },
  },
};
export default meta;
type Story = StoryObj<ToggleFieldProps>;

export const Default: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return (
      <ToggleField
        {...args}
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    );
  },
  args: {
    label: "Enable feature",
    checked: false,
  },
};

export const WithHelpText: Story = {
  ...Default,
  args: {
    ...Default.args,
    helpText: "This enables a special feature.",
  },
};

export const WithTooltip: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return (
      <ToggleField
        {...args}
        checked={checked}
        onChange={() => setChecked(!checked)}
        tooltipProps={{
          content: "Toggling this will activate advanced mode.",
          position: "top",
        }}
      />
    );
  },
  args: {
    label: "Enable advanced mode",
  },
};

export const TooltipWithCustomColors: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return (
      <ToggleField
        {...args}
        checked={checked}
        onChange={() => setChecked(!checked)}
        tooltipProps={{
          content: "The tooltip has custom colors and is on the right.",
          position: "right",
          colors: {
            backgroundColor: "#1e293b",
            textColor: "#aee3fa",
          },
        }}
      />
    );
  },
  args: {
    label: "Right side info",
  },
};

export const LabelRight: Story = {
  ...Default,
  args: {
    ...Default.args,
    label: "Label on the right",
    labelPosition: "right",
    checked: true,
  },
};

export const LabelCustomColorRequired: Story = {
  ...Default,
  args: {
    ...Default.args,
    label: "Custom color label (required)",
    labelProps: { color: "#dc2626", required: true },
    checked: false,
  },
};

export const Disabled: Story = {
  ...Default,
  args: {
    ...Default.args,
    label: "Can't touch this",
    disabled: true,
    checked: false,
  },
};

export const AllCustomizations: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(true);
    return (
      <ToggleField
        {...args}
        checked={checked}
        onChange={() => setChecked(!checked)}
        labelProps={{ color: "#2563eb", required: true }}
        tooltipProps={{
          content: "You can combine all customizations.",
          position: "bottom",
          colors: {
            backgroundColor: "#2563eb",
            textColor: "#fff",
          },
          delay: 100,
        }}
        helpText="Everything is customized here."
        size={44}
      />
    );
  },
  args: {
    label: "Full custom example",
  },
};
