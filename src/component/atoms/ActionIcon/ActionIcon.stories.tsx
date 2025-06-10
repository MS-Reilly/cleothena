// ActionIcon.stories.tsx
import React from "react";
import { Meta, Story } from "@storybook/react";
import ActionIcon from "./ActionIcon";
import { ActionIconProps } from "./types";

export default {
  title: "Atoms/ActionIcon",
  component: ActionIcon,
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
  argTypes: {
    size: {
      control: { type: "number" },
      description: "Override width & height (px)",
    },
    borderRadius: {
      control: { type: "text" },
      description: "Override border radius",
    },
    colors: {
      control: { type: "object" },
      description: "Custom colors for icon, background, border",
    },
  },
} as Meta<ActionIconProps>;

const Template: Story<ActionIconProps> = (args) => <ActionIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  iconName: "menu-food",
};

export const Large = Template.bind({});
Large.args = {
  iconName: "menu-food",
  size: 60,
};

export const Rounded = Template.bind({});
Rounded.args = {
  iconName: "menu-food",
  borderRadius: "50%",
};

export const Colored = Template.bind({});
Colored.args = {
  iconName: "menu-food",
  colors: {
    backgroundColor: "#e91e63",
    iconColor: "#ffffff",
  },
};

export const WithBorder = Template.bind({});
WithBorder.args = {
  iconName: "menu-food",
  colors: {
    borderColor: "#333333",
  },
};

export const Clickable = Template.bind({});
Clickable.args = {
  iconName: "menu-food",
  onClick: () => alert("ActionIcon clicked!"),
};
