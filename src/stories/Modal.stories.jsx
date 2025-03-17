import React from "react";
import Modal from "../components/Modal/Modal";

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    isOpen: { control: "boolean" },
    title: { control: "text" },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    onClose: { action: "closed" },
  },
};

const Template = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  title: "Default Modal",
  size: "md",
  children: <p>This is a modal content.</p>,
};

export const Small = Template.bind({});
Small.args = {
  isOpen: true,
  title: "Small Modal",
  size: "sm",
  children: <p>This is a small modal.</p>,
};

export const Large = Template.bind({});
Large.args = {
  isOpen: true,
  title: "Large Modal",
  size: "lg",
  children: <p>This is a large modal.</p>,
};