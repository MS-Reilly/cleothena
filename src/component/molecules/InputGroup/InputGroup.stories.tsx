import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import InputGroup from "./InputGroup";
import { InputGroupProps } from "./types";
import { ActionIcon } from "../../atoms";

const meta: Meta<InputGroupProps> = {
  title: "Molecules/InputGroup",
  component: InputGroup,
  argTypes: {
    label: { control: "text" },
    helpText: { control: "text" },
    error: { control: "boolean" },
    leftSlot: { control: false },
    rightSlot: { control: false },
    labelProps: { control: false },
    tooltipProps: { control: false },
  },
};
export default meta;
type Story = StoryObj<InputGroupProps>;

export const Default: Story = {
  render: (args) => {
    const [val, setVal] = useState("");
    return (
      <InputGroup
        {...args}
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
    );
  },
  args: {
    label: "Your name",
    placeholder: "Type here...",
  },
};

export const WithTooltip: Story = {
  ...Default,
  args: {
    ...Default.args,
    label: "Username",
    tooltipProps: {
      content: "Enter your unique username.",
      position: "right",
    },
    placeholder: "Pick a username",
  },
};

export const WithIconLeft: Story = {
  render: (args) => {
    const [val, setVal] = useState("");
    return (
      <InputGroup
        {...args}
        value={val}
        onChange={(e) => setVal(e.target.value)}
        leftSlot={<ActionIcon iconName={"age"} size={20} />}
      />
    );
  },
  args: {
    label: "Age",
    placeholder: "Enter age",
    helpText: "You must be at least 18.",
  },
};

export const WithIconRight: Story = {
  render: (args) => {
    const [val, setVal] = useState("");
    return (
      <InputGroup
        {...args}
        value={val}
        onChange={(e) => setVal(e.target.value)}
        rightSlot={<ActionIcon iconName={"age"} size={35} />}
      />
    );
  },
  args: {
    label: "Birth year",
    placeholder: "Enter year",
    helpText: "Format: YYYY",
  },
};

export const Error: Story = {
  ...Default,
  args: {
    ...Default.args,
    label: "Email",
    placeholder: "you@company.com",
    error: true,
    helpText: "This email is invalid.",
  },
};
