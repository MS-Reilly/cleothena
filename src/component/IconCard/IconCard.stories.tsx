import React from "react";
import IconCard from "./IconCard";
import MyIcon from "./../../Assets/icons/bone.svg";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof IconCard> = {
  title: "Components/IconCard",
  component: IconCard,
  args: {
    title: "Cuidado personalizado",
    icon: MyIcon,
    color: "#2ec4b6",
    backgroundColor: "fff",
  },
};

export default meta;
type Story = StoryObj<typeof IconCard>;

export const Default: Story = {};
