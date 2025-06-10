import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Tooltip from "./Tooltip";
import { TooltipProps } from "./types";

const meta: Meta<TooltipProps> = {
  title: "Atoms/Tooltip",
  component: Tooltip,
  argTypes: {
    content: { control: "text" },
    position: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
    },
    delay: { control: "number" },
    disabled: { control: "boolean" },
    colors: { control: "object" },
    children: { control: false },
  },
};
export default meta;
type Story = StoryObj<TooltipProps>;

export const Default: Story = {
  args: {
    content: "Default tooltip (top)",
    position: "top",
    delay: 300,
    children: <button>Hover me</button>,
  },
};

export const Bottom: Story = {
  args: {
    ...Default.args,
    content: "Tooltip at bottom",
    position: "bottom",
    children: <button>Bottom</button>,
  },
};

export const Left: Story = {
  args: {
    ...Default.args,
    content: "Tooltip at left",
    position: "left",
    children: <button>Left</button>,
  },
};

export const Right: Story = {
  args: {
    ...Default.args,
    content: "Tooltip at right",
    position: "right",
    children: <button>Right</button>,
  },
};

export const CustomColors: Story = {
  args: {
    content: "Custom colours!",
    position: "top",
    colors: {
      backgroundColor: "#262626",
      textColor: "#ffd700",
    },
    children: <button>Custom Colours</button>,
  },
};

export const InfoColors: Story = {
  args: {
    content: "Info color tooltip",
    position: "right",
    colors: {
      backgroundColor: "#2563eb",
      textColor: "#fff",
    },
    children: <button>Info</button>,
  },
};

export const WarningColors: Story = {
  args: {
    content: "Warning! Watch out.",
    position: "bottom",
    colors: {
      backgroundColor: "#fbbf24",
      textColor: "#222",
    },
    children: <button>Warning</button>,
  },
};

export const Delay: Story = {
  args: {
    content: "Appears after 1s",
    delay: 1000,
    position: "top",
    children: <button>Delayed Tooltip</button>,
  },
};

export const Disabled: Story = {
  args: {
    content: "You can't see me!",
    disabled: true,
    position: "right",
    children: <button>Disabled</button>,
  },
};

export const LongContent: Story = {
  args: {
    content:
      "This is a much longer tooltip. It can be used for descriptions or detailed info.",
    position: "bottom",
    children: <span style={{ fontSize: 18, padding: 10 }}>Text trigger</span>,
  },
};

export const AllDirectionsRow: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: 36,
        marginTop: 48,
        justifyContent: "center",
      }}
    >
      <Tooltip content="Top" position="top">
        <button>Top</button>
      </Tooltip>
      <Tooltip content="Right" position="right">
        <button>Right</button>
      </Tooltip>
      <Tooltip content="Bottom" position="bottom">
        <button>Bottom</button>
      </Tooltip>
      <Tooltip content="Left" position="left">
        <button>Left</button>
      </Tooltip>
    </div>
  ),
};

export const WithCustomColorsAllDirections: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: 36,
        marginTop: 48,
        justifyContent: "center",
      }}
    >
      <Tooltip
        content="Top custom"
        position="top"
        colors={{ backgroundColor: "#444", textColor: "#0ff" }}
      >
        <button>Top</button>
      </Tooltip>
      <Tooltip
        content="Right custom"
        position="right"
        colors={{ backgroundColor: "#1e3a8a", textColor: "#ffd700" }}
      >
        <button>Right</button>
      </Tooltip>
      <Tooltip
        content="Bottom custom"
        position="bottom"
        colors={{ backgroundColor: "#be185d", textColor: "#fff" }}
      >
        <button>Bottom</button>
      </Tooltip>
      <Tooltip
        content="Left custom"
        position="left"
        colors={{ backgroundColor: "#f59e42", textColor: "#fff" }}
      >
        <button>Left</button>
      </Tooltip>
    </div>
  ),
};
