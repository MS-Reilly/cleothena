import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./Navbar";
import { NavbarProps } from "./types";

import logo from "../../Assets/logo/logo.svg";
import image1 from "../../Assets/images/image1.jpg";

/* SVGs come in as components via SVGR (no { ReactComponent as … } alias needed) */
import HomeIcon from "../../Assets/icons/home.svg";
import DocsIcon from "../../Assets/icons/docs.svg";
import ServicesIcon from "../../Assets/icons/services.svg";
import ContactIcon from "../../Assets/icons/contact.svg";

const defaultLinks = [
  { label: "Home", href: "/", icon: HomeIcon },
  { label: "Docs", href: "/docs", icon: DocsIcon },
  {
    label: "Services",
    href: "#",
    icon: ServicesIcon,
    children: [
      { label: "Hosting", href: "/services/hosting" },
      { label: "Design", href: "/services/design" },
    ],
  },
  { label: "Contact", href: "/contact", icon: ContactIcon },
];

/* ---------- story meta ---------- */
const meta: Meta<typeof Navbar> = {
  title: "Components/Navbar",
  component: Navbar,
  parameters: { layout: "fullscreen" },
  argTypes: {
    position: {
      control: "select",
      options: ["static", "fixed", "sticky"],
      description: "CSS position property for the navbar",
    },
    ghost: {
      control: "boolean",
      description: "Transparent 'ghost' style (overlaps content)",
    },
  },
};
export default meta;
type Story = StoryObj<typeof Navbar>;

/* ---------- template ---------- */
const Template: Story = (args: NavbarProps) => (
  <BrowserRouter>
    <Navbar {...args} />
    <img src={image1} alt="background" style={{ width: "100%" }} />
  </BrowserRouter>
);

/* ---------- stories ---------- */
export const Default: Story = Template.bind({});
Default.args = {
  logo: <img src={logo} alt="Cleothena" style={{ height: 35 }} />,
  links: defaultLinks,
  position: "sticky",
  ghost: false,
  navStyle: {
    link: "#FFFFFF",
    subLink: "#133F87", // dropdown colour
    linkHover: "#D4AF37",
    linkActive: "#7AE2CF",
    bg: "#133F87",
  },
  sidebarProps: {
    side: "right",
    hamburgerFill: "#FF9F1A",
    hamburgerStyle: { height: 30, width: 30, cursor: "pointer" },
  },
};

export const FixedTop: Story = Template.bind({});
FixedTop.args = {
  ...Default.args,
  position: "fixed",
};
