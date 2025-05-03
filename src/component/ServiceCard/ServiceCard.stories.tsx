import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ServiceCard from "./ServiceCard";
import { ServiceCardProps } from "./ServiceCard.types";

const meta: Meta<typeof ServiceCard> = {
  title: "Components/ServiceCard",
  component: ServiceCard,
  tags: ["autodocs"],
  args: {
    title: "Modeling",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://via.placeholder.com/60",
    altText: "Modeling service",
    linkText: "Learn More",
    linkHref: "#",
  },
};

export default meta;

type Story = StoryObj<typeof ServiceCard>;

export const Default: Story = {};
