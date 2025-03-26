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
  },
};

export default meta;
type Story = StoryObj<typeof ScrollIndicator>;

const Template: Story = (args: ScrollIndicatorProps) => <ScrollIndicator {...args} />;

export const Default: Story = Template.bind({});
Default.args = {
  text: 'Descubre más',
};

export const CustomText: Story = Template.bind({});
CustomText.args = {
  text: 'Scroll Down',
};

export const WithClickHandler: Story = Template.bind({});
WithClickHandler.args = {
  text: 'Click to Scroll',
  onClick: () => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' }),
};
