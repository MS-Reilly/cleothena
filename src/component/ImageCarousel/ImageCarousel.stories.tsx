import { Meta, StoryObj } from "@storybook/react";
import ImageCarousel from "./ImageCarousel";
import { ImageCarouselProps } from "./ImageCarousel.types";

const meta: Meta<ImageCarouselProps> = {
  title: "Components/ImageCarousel",
  component: ImageCarousel,
  tags: ["autodocs"],
  argTypes: {
    images: { control: "array" },
    title: { control: "text" },
    interval: { control: "number" },
    imageWidth: { control: "text" },
    imageHeight: { control: "text" },
  },
};

export default meta;

export const Default: StoryObj<ImageCarouselProps> = {
  args: {
    title: "Nuestros Huéspedes",
    images: [
      "https://placedog.net/500/300?id=1",
      "https://placedog.net/500/300?id=2",
      "https://placedog.net/500/300?id=3",
    ],
    interval: 3000,
    imageWidth: "80%",
    imageHeight: "auto",
  },
};
