import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import PricingCarousel from "./PricingCarousel";
import PricingCard from "../PricingCard/PricingCard";

const meta: Meta<typeof PricingCarousel> = {
  title: "Components/PricingCarousel",
  component: PricingCarousel,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PricingCarousel>;

export const Default: Story = {
  render: () => (
    <PricingCarousel>
      <PricingCard
        planName="Mensual"
        price="$299"
        billingCycle="/mes"
        description="Ideal para probar el servicio."
        features={["Baño", "Cepillado", "Limpieza de oídos"]}
        isPopular
        onButtonClick={() => alert("Clicked")}
      />
      <PricingCard
        planName="Trimestral"
        price="$799"
        billingCycle="/3 meses"
        description="Ahorra contratando por trimestre."
        features={["Todo lo mensual", "Descuento adicional"]}
        onButtonClick={() => alert("Clicked")}
      />
    </PricingCarousel>
  ),
};
