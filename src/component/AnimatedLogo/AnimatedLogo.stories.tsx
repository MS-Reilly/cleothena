import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import AnimatedLogo from "./AnimatedLogo";
import RumiLogo from "../../Assets/images/Logo1.svg";

const meta: Meta<typeof AnimatedLogo> = {
  title: "Components/AnimatedLogo",
  component: AnimatedLogo,
};

export default meta;

type Story = StoryObj<typeof AnimatedLogo>;

export const Default: Story = {
  args: {
    size: 150,
    logo: RumiLogo,
  },
};
