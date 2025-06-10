import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Label from "./Label";
import { LabelProps } from "./types";

const meta: Meta<LabelProps> = {
  title: "Atoms/Label",
  component: Label,
  argTypes: {
    children: { control: "text" },
    htmlFor: { control: "text" },
    color: { control: "color" },
    required: { control: "boolean" },
    className: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<LabelProps>;

export const Default: Story = {
  args: {
    children: "Username",
    htmlFor: "username",
  },
};

export const Required: Story = {
  args: {
    children: "Email Address",
    htmlFor: "email",
    required: true,
  },
};

export const CustomColor: Story = {
  args: {
    children: "Name",
    htmlFor: "name",
    color: "#0070f3",
  },
};

export const WithCustomClass: Story = {
  args: {
    children: "With custom class",
    className: "my-custom-label",
  },
};
