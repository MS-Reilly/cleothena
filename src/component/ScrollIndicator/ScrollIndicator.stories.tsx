import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ScrollIndicator from './ScrollIndicator';
import { ScrollIndicatorProps } from './types';

const meta: Meta<typeof ScrollIndicator> = {
  title: 'Components/ScrollIndicator',
  component: ScrollIndicator,
  argTypes: {
    text: {
      control: 'text',
      description: 'Text displayed between the scroll arrows.',
      defaultValue: 'Descubre más',
    },
    onClick: {
      action: 'clicked',
      description: 'Optional click handler to scroll or trigger an event.',
    },
    className: {
      control: 'text',
      description: 'Optional additional CSS class names.',
    },
    arrowProps: {
      control: 'object',
      description: 'Props applied to arrow icons (e.g., style, className).',
    },
    textProps: {
      control: 'object',
      description: 'Props applied to the text span (e.g., style, className).',
    },
    direction: {
      control: {
        type: 'select',
        options: ['up', 'down', 'left', 'right', 'bothSides'],
      },
      description: 'Direction of the arrows and layout of the scroll indicator.',
      defaultValue: 'down',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ScrollIndicator>;

const Template: Story = (args: ScrollIndicatorProps) => <ScrollIndicator {...args} />;

export const Default: Story = Template.bind({});
Default.args = {
  text: 'Descubre más',
  direction: 'down',
};

export const CustomText: Story = Template.bind({});
CustomText.args = {
  text: 'Scroll Down',
  direction: 'down',
};

export const WithClickHandler: Story = Template.bind({});
WithClickHandler.args = {
  text: 'Click to Scroll',
  direction: 'down',
  onClick: () => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' }),
};

export const CustomStyled: Story = Template.bind({});
CustomStyled.args = {
  text: 'Personalizado',
  direction: 'down',
  arrowProps: {
    style: {
      fill: '#FF5733',
      width: '20px',
      height: '20px',
    },
  },
  textProps: {
    style: {
      color: '#FF5733',
      fontSize: '20px',
      fontWeight: 'bold',
    },
  },
};

export const UpDirection: Story = Template.bind({});
UpDirection.args = {
  text: 'Scroll Up',
  direction: 'up',
};

export const LeftDirection: Story = Template.bind({});
LeftDirection.args = {
  text: 'Go Left',
  direction: 'left',
};

export const RightDirection: Story = Template.bind({});
RightDirection.args = {
  text: 'Go Right',
  direction: 'right',
};

export const BothSides: Story = Template.bind({});
BothSides.args = {
  text: 'Navigate',
  direction: 'bothSides',
};
