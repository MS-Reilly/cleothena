import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

import SideBar from "./SideBar";
import { SideBarProps } from "./types";

import logo from "../../Assets/logo/logo.svg";
import image1 from "../../Assets/images/image1.jpg";

import HomeIcon from "../../Assets/icons/home.svg";

/* ---------- sidebar config ---------- */
const defaultSidebarConfig = [
  { label: "Home", href: "/", icon: HomeIcon },
  {
    label: "Services",
    href: "#",
    icon: HomeIcon,
    children: [
      { label: "Hosting", href: "/services/hosting" },
      { label: "Design", href: "/services/design" },
    ],
  },
  {
    label: "Settings",
    href: "#",
    icon: HomeIcon,
    children: [
      { label: "Account", href: "/settings/account" },
      { label: "Security", href: "/settings/security" },
    ],
  },
];

/* ---------- story meta ---------- */
const meta: Meta<typeof SideBar> = {
  title: "Components/SideBar",
  component: SideBar,
  parameters: { layout: "fullscreen" },
  argTypes: {
    side: {
      control: "select",
      options: ["left", "right"],
    },
    hamburgerFill: {
      control: "color",
    },
  },
};
export default meta;
type Story = StoryObj<typeof SideBar>;

/* ---------- template ---------- */
const Template: Story = (args: SideBarProps) => (
  <BrowserRouter>
    <SideBar {...args} />
    <img
      src={image1}
      alt="background"
      style={{ width: "100%", marginTop: 60 }}
    />
  </BrowserRouter>
);

/* ---------- stories ---------- */
export const Default: Story = Template.bind({});
Default.args = {
  logo: <img src={logo} alt="Logo" style={{ height: 35 }} />,
  sidebarConfig: defaultSidebarConfig,
  side: "left",
  hamburgerStyle: { height: 30, width: 30, cursor: "pointer" },
  hamburgerFill: "#133F87",
};

export const RightSide: Story = Template.bind({});
RightSide.args = {
  ...Default.args,
  side: "right",
};

export const NoItems: Story = Template.bind({});
NoItems.args = {
  ...Default.args,
  sidebarConfig: [],
};

export const WithFooterContent: Story = Template.bind({});
WithFooterContent.args = {
  ...Default.args,
  footerContent: (
    <div style={{ padding: "1rem" }}>
      <h4 style={{ marginBottom: "0.5rem" }}>¿Necesitas ayuda?</h4>
      <p style={{ fontSize: "0.9rem", lineHeight: "1.4" }}>
        Si tienes alguna duda o necesitas soporte, no dudes en enviarnos un
        mensaje. Nuestro equipo estará encantado de ayudarte lo antes posible.
      </p>
    </div>
  ),
};
