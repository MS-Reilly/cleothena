// Separator.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Separator } from './Separator';
import { SeparatorProps } from './types';

// This is an example SVG imported via SVGR. Replace with your own icon path.
import MyIcon from './../../Assets/icons/bone.svg';

const meta: Meta<SeparatorProps> = {
  title: 'Components/Separator',
  component: Separator,
  // Customize how Storybook shows or controls these props in the UI
  argTypes: {
    icon: {
      table: { disable: true }, // we often disable the table for icon, as it's an imported component
    },
    count: {
      control: { type: 'number', min: 1, max: 20 },
      description: 'How many times to repeat the icon.',
    },
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'accent', 'highlight'],
      },
      description: 'Color variant for the icon.',
    },
    size: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg', 'xl'],
      },
      description: 'Size variant for the icon dimensions.',
    },
  },
};
export default meta;

type Story = StoryObj<SeparatorProps>;

/**
 * Default usage of Separator
 */
export const Default: Story = {
  args: {
    icon: MyIcon,
    count: 3,
    color: 'primary',
    size: 'md',
  },
};

/**
 * Example story showing a different configuration
 */
export const LargeAccent: Story = {
  args: {
    icon: MyIcon,
    count: 5,
    color: 'accent',
    size: 'lg',
  },
};
