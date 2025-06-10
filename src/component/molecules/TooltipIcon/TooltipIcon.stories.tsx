import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TooltipIcon from "./TooltipIcon";
import { TooltipIconProps } from "./types";

const meta: Meta<TooltipIconProps> = {
  title: "Molecules/TooltipIcon",
  component: TooltipIcon,
  argTypes: {
    iconName: { control: "text" },
    className: { control: "text" },
    // Tooltip and icon props aren't controlled here to keep the UI simple.
  },
};
export default meta;
type Story = StoryObj<TooltipIconProps>;

export const Default: Story = {
  args: {
    iconName: "age",
    tooltipProps: {
      content: "This icon means 'age'.",
      position: "top",
    },
    iconProps: { size: 24 },
  },
};

export const CustomColors: Story = {
  args: {
    iconName: "age",
    tooltipProps: {
      content: "Custom colors and on the right.",
      position: "right",
      colors: {
        backgroundColor: "#0070f3",
        textColor: "#fff",
      },
    },
    iconProps: {
      size: 28,
      colors: { backgroundColor: "#eee", iconColor: "#0070f3" },
    },
  },
};
