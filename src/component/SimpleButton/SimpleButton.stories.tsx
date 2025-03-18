import React from 'react';
import SimpleButton from './index';

import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SimpleButton> = {
    title: 'Components/SimpleButton',
    component: SimpleButton,
    argTypes: {
        onClick: { action: 'clicked' },
        children: { control: 'text' },
        disabled: { control: 'boolean' },
        title: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Click Me',
        children: undefined,
        disabled: false,
    },
};

export const Disabled: Story = {
    args: {
        title: 'Disabled',
        children: undefined,
        disabled: true,
    },
};