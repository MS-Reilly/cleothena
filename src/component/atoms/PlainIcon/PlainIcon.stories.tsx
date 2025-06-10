// PlainIcon.stories.tsx
import React from "react";
import { Meta, Story } from "@storybook/react";
import PlainIcon from "./PlainIcon";
import { PlainIconProps } from "./types";

export default {
  title: "Atoms/PlainIcon",
  component: PlainIcon,
  argTypes: {
    name: {
      control: { type: "text" },
      description: "Base icon name (without prefix or .svg)",
    },
    size: {
      control: { type: "number" },
      description: "Width/height in px",
    },
    color: {
      control: { type: "color" },
      description: "CSS color string",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS class names",
    },
  },
} as Meta<PlainIconProps>;

const Template: Story<PlainIconProps> = (args) => <PlainIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "age",
};

export const Colored = Template.bind({});
Colored.args = {
  name: "age",
  color: "#e91e63",
};

export const Large = Template.bind({});
Large.args = {
  name: "age",
  size: 48,
};

export const WithClass = Template.bind({});
WithClass.args = {
  name: "age",
  className: "custom-class",
};
