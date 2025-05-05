import Accordion from "./Accordion";
import { AccordionProps } from "./Accordion.types";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<AccordionProps> = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    openColor: { control: "color" },
  },
};

export default meta;

export const Default: StoryObj<AccordionProps> = {
  args: {
    title: "FAQ",
    questions: [
      {
        question: "What is your return policy?",
        answer: "You can return within 30 days.",
      },
      {
        question: "Do you ship internationally?",
        answer: "Yes, we ship worldwide.",
      },
    ],
  },
};

export const WithCustomColor: StoryObj<AccordionProps> = {
  args: {
    ...Default.args,
    openColor: "#ff6600",
  },
};
