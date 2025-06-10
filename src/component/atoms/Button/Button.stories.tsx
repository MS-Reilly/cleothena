// Button.stories.tsx
import React from "react";
import { Meta, Story } from "@storybook/react";
import Button from "./Button";
import { ButtonProps } from "./types";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: [
          "primary",
          "secondary",
          "danger",
          "text",
          "success",
          "info",
          "warning",
        ],
      },
    },
    iconPosition: {
      control: { type: "radio", options: ["left", "right"] },
    },
    text: { control: { type: "text" } },
    colors: { control: { type: "object" } },
    size: { control: { type: "object" } },
    disabled: { control: { type: "boolean" } },
    onClick: { action: "clicked" },
  },
} as Meta<ButtonProps>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Primary",
  variant: "primary",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  text: "With Icon",
  variant: "secondary",
  iconName: "alien",
  iconPosition: "left",
};

export const Danger = Template.bind({});
Danger.args = {
  text: "Delete",
  variant: "danger",
  backgroundColor: "#8e44ad",
};

export const TextOnly = Template.bind({});
TextOnly.args = {
  text: "Learn more",
  variant: "text",
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: "Can't click me",
  variant: "primary",
  disabled: true,
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  text: "Custom",
  variant: "primary",
  colors: {
    backgroundColor: "#8e44ad",
    textColor: "#fff",
    hoverColor: "#732d91",
  },
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  text: "Wide Button",
  variant: "info",
  size: { buttonWidth: "200px", iconSize: 20 },
};
