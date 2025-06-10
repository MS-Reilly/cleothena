import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ServiceHighlightCard from "./ServiceHighlightCard";
import DogImage from "./../../Assets/images/image1.jpg";

const meta: Meta<typeof ServiceHighlightCard> = {
  title: "Components/ServiceHighlightCard",
  component: ServiceHighlightCard,
  tags: ["autodocs"],
  args: {
    title: "Cepillado Extra",
    description:
      "Eliminamos nudos y pelo muerto para mantener el pelaje sano y brillante.",
    imageUrl: DogImage,
    altText: "Foto del servicio de cepillado",
  },
};

export default meta;
type Story = StoryObj<typeof ServiceHighlightCard>;

export const Default: Story = {};
