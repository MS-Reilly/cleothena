import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './index';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        onClick: { action: 'clicked' },
        children: { control: 'text' },
        disabled: { control: 'boolean' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Click Me',
    disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'Disabled',
    disabled: true,
};