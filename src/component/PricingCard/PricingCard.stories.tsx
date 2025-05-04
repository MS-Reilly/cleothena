import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import PricingCard from "./PricingCard";

const meta: Meta<typeof PricingCard> = {
  title: "Components/PricingCard",
  component: PricingCard,
  tags: ["autodocs"],
  args: {
    planName: "Plan Mensual",
    price: "$299",
    billingCycle: "/mes",
    description: "Ideal para probar el servicio.",
    features: ["Baño", "Cepillado", "Limpieza de oídos"],
    isPopular: true,
    buttonText: "Cotizar",
  },
};

export default meta;
type Story = StoryObj<typeof PricingCard>;

export const Default: Story = {
  args: {
    onButtonClick: () => alert("Cotizar clicado"),
  },
};
