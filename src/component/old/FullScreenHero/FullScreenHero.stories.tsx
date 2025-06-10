import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import FullScreenHero from './FullScreenHero';
import { FullScreenHeroProps } from './types';
import image1 from '../../Assets/images/image1.jpg'; // Replace with actual image path

const meta: Meta<typeof FullScreenHero> = {
  title: 'Components/FullScreenHero',
  component: FullScreenHero,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    top: {
      control: 'text',
      description: 'Top positioning of the animated text container.',
    },
    left: {
      control: 'text',
      description: 'Left positioning of the animated text container.',
    },
    right: {
      control: 'text',
      description: 'Right positioning of the animated text container.',
    },
    animationThreshold: {
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
      description: 'How much of the element should be visible to trigger the animation.',
    },
    overlay: {
      control: 'boolean',
      description: 'Whether to show a dark overlay on top of the image.',
    },
    overlayColor: {
      control: 'color',
      description: 'Custom colour for the overlay if enabled.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof FullScreenHero>;

const Template: Story = (args: FullScreenHeroProps) => (
  <FullScreenHero {...args}>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        textAlign: 'center',
        color: 'white',
      }}
    >
      <div style={{ fontSize: '32px', fontWeight: 'bold' }}>
        Bienvenido a RuMi Pet Care
      </div>
      <div style={{ fontSize: '16px' }}>
        Cuidamos de tu mascota de la mejor manera
      </div>
    </div>
  </FullScreenHero>
);

export const Default: Story = Template.bind({});
Default.args = {
  image: image1,
  top: '40%',
  left: '5%',
  animationThreshold: 0.5,
  overlay: true,
  overlayColor: 'rgba(0, 0, 0, 0.5)',
};

export const No_Overlay: Story = Template.bind({});
No_Overlay.args = {
  image: image1,
  top: '20%',
  left: '5%',
  animationThreshold: 0.5,
  overlay: false,
  overlayColor: 'rgba(0, 0, 0, 0.5)',
};