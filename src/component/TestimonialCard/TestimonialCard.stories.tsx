import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TestimonialCard from "./TestimonialCard";

const meta: Meta<typeof TestimonialCard> = {
  title: "Components/TestimonialCard",
  component: TestimonialCard,
  tags: ["autodocs"],
  args: {
    name: "Sofía Martínez",
    role: "Cliente feliz",
    message:
      "¡El mejor lugar para mi mascota! Siempre se va feliz y regresa aún más.",
    imageUrl: "https://via.placeholder.com/48",
    rating: 5,
    variant: "md",
  },
};

export default meta;
type Story = StoryObj<typeof TestimonialCard>;

export const Default: Story = {};
