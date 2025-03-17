import React from "react";
import Button from "../components/Button/Button";
import CsvIcon from "./../assets/icons/csv.svg";

// Optionally, set displayName if needed (SVGR usually handles this)

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "accent", "danger", "success"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    onClick: { action: "clicked" },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  size: "md",
  children: "Hello",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  size: "md",
  children: "Secondary",
};

export const Accent = Template.bind({});
Accent.args = {
  variant: "accent",
  size: "md",
  children: "Accent",
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
  size: "md",
  children: "Success",
};

export const Danger = Template.bind({});
Danger.args = {
  variant: "danger",
  size: "md",
  children: "Danger",
};

export const Icon = Template.bind({});
Icon.args = {
  variant: "primary",
  size: "md",
  hasIcon: true, // New prop to adjust padding when an icon is present
  children: (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "5px",
        padding: "0",
      }}
    >
      <img src={CsvIcon} alt="CSV Icon" width={20} height={20} />
      <p>Icon Text</p>
    </div>
  ),
};
