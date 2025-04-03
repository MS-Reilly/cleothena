import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Navbar from './Navbar';
import { NavbarProps } from './types';
import logo from '../../Assets/logo/logo.svg';
import { BrowserRouter } from 'react-router-dom';
import image1 from '../../Assets/images/image1.jpg';


import HomeIcon from "./../../Assets/icons/home.svg";
import DocsIcon from "./../../Assets/icons/docs.svg";
import ServicesIcon from "./../../Assets/icons/services.svg";
import ContactIcon from "./../../Assets/icons/contact.svg";


const meta: Meta<typeof Navbar> = {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    position: {
      control: 'select',
      options: ['static', 'fixed', 'sticky'],
      description: 'Positioning of the navbar',
    },
    ghost: {
      control: 'boolean',
      description: 'If true, the navbar becomes transparent and overlays content.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

const defaultLinks = [
  { label: 'Home', href: '/', icon: HomeIcon},
  { label: 'Docs', href: '/docs',icon: DocsIcon  },
  {
    label: 'Services',
    href: '#',
    icon: ServicesIcon ,
    children: [
      { label: 'Hosting', href: '/services/hosting',  },
      { label: 'Design', href: '/services/design' },
    ],
  },
  { label: 'Contact', href: '/contact',icon: ContactIcon},
];

const Template: Story = (args: NavbarProps) => (
  <BrowserRouter>
    <Navbar {...args} />
    <img src={image1} alt="Cleothena background" style={{ width: '100%' }} />
  </BrowserRouter>
);

export const Default: Story = Template.bind({});
Default.args = {
  logo: <img src={logo} alt="Cleothena" style={{ height: '35px' }} />,
  links: defaultLinks,
  position: 'sticky',
  ghost: false,
  sidebarProps: {
    side: "right",
    hamburgerFill: "#FF9F1A",
    hamburgerStyle: { height: "30px", width: "30px", cursor: "pointer" },
  }
};

export const FixedTop: Story = Template.bind({});
FixedTop.args = {
  ...Default.args,
  position: 'fixed',
};
