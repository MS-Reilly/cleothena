import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";
import { InputProps } from "./types";

const meta: Meta<InputProps> = {
  title: "Atoms/Input",
  component: Input,
  argTypes: {
    type: { control: "text" },
    placeholder: { control: "text" },
    value: { control: "text" },
    helperText: { control: "text" },
    status: {
      control: "select",
      options: ["default", "success", "error", "disabled"],
    },
    iconName: { control: "text" },
    className: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<InputProps>;

export const Default: Story = {
  render: (args) => {
    const [val, setVal] = useState("");
    return (
      <Input {...args} value={val} onChange={(e) => setVal(e.target.value)} />
    );
  },
  args: {
    placeholder: "Enter your age...",
    helperText: "",
    status: "default",
    iconName: "",
  },
};

export const WithIcon: Story = {
  render: (args) => {
    const [val, setVal] = useState("");
    return (
      <Input {...args} value={val} onChange={(e) => setVal(e.target.value)} />
    );
  },
  args: {
    placeholder: "Enter your age...",
    helperText: "This input uses the 'age' icon.",
    status: "default",
    iconName: "age", // Shows the "age" icon in your library
  },
};

export const Error: Story = {
  render: (args) => {
    const [val, setVal] = useState("");
    return (
      <Input {...args} value={val} onChange={(e) => setVal(e.target.value)} />
    );
  },
  args: {
    placeholder: "Input with error",
    helperText: "There's an error here.",
    status: "error",
    iconName: "age",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled input",
    helperText: "Can't edit this.",
    status: "disabled",
    iconName: "age",
    value: "",
    onChange: undefined,
  },
};
