import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Accordion from "./Accordion";
import { AccordionProps } from "./Accordion.types";

const meta: Meta<AccordionProps> = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    questions: {
      control: "object",
    },
    className: { control: "text" },
    colors: {
      control: "object",
    },
    arrow: {
      control: "object",
    },
  },
};

export default meta;

const sampleQuestions = [
  {
    question: "¿Qué servicios incluye el grooming?",
    answer:
      "Nuestro servicio de grooming abarca baño, corte de pelo, cepillado, limpieza de oídos y corte de uñas, adaptándose a las necesidades de cada mascota.",
  },
  {
    question: "¿Qué productos se utilizan?",
    answer:
      "Utilizamos productos de alta calidad, adecuados para cada tipo de pelaje, que garantizan la salud y el brillo natural de tu mascota.",
  },
  {
    question: "¿Cuánto dura el servicio?",
    answer:
      "El servicio básico puede durar entre 1 y 2 horas, dependiendo del tamaño y necesidades específicas de la mascota.",
  },
  {
    question: "¿Es necesario reservar con anticipación?",
    answer:
      "Sí, recomendamos reservar al menos 24 horas antes para garantizar disponibilidad y un servicio personalizado.",
  },
];

export const Default: StoryObj<AccordionProps> = {
  args: {
    questions: sampleQuestions,
  },
};

export const CustomisedColours: StoryObj<AccordionProps> = {
  args: {
    questions: sampleQuestions,
    colors: {
      openBg: "#FF9F1A",
      closedBg: "#FFFFFF",
      openTextColor: "#FFFFFF",
      closedTextColor: "#000000",
    },
    arrow: {
      width: "20px",
      height: "20px",
      fillOpen: "#FFFFFF",
      fillClosed: "#000000",
    },
  },
};
