import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from './ThemeProvider'; // Ensure correct path
import { theme as defaultTheme } from './style/theme'; // Import the default theme
import SimpleButton from '../component/SimpleButton/SimpleButton'; // Ensure correct path
import { SimpleButtonProps } from '../component/SimpleButton/types';

const meta: Meta<typeof SimpleButton> = {
    title: 'Theme/Buttons/SimpleButton',
    component: SimpleButton,
    argTypes: {
      theme: {
        control: 'object',
        description: 'Customize the theme dynamically.',
      },
      variant: {
        control: 'radio',
        options: ['xs','sm', 'md', 'lg'],
        description: 'Choose between small, medium, and large button sizes.',
      },
      color: {
        control: 'radio',
        options: ['primary', 'secondary', 'accent', 'highlight'],
        description: 'Choose the button color variant.',
      },
      disabled: {
        control: 'boolean',
        description: 'Disables the button interaction.',
      },
      outline: {
        control: 'boolean',
        description: 'Applies an outline style instead of a solid background.',
      },
      ghost: {
        control: 'boolean',
        description: 'Applies a ghost-style button with no border.',
      },
    },
    parameters: {
      docs: {
        description: {
          component: 'A fully customizable button styled as a div using the ThemeProvider.',
        },
      },
    },
  };
  
  export default meta;
  type Story = StoryObj<typeof SimpleButton>;
  
  /** ✅ Default Themed Button */
  export const DefaultTheme: Story = {
    args: {
      title: 'Default Themed Button',
      variant: 'md',
      color: 'primary',
      theme: defaultTheme, // ✅ Pass default theme
    },
    render: (args) => (
      <ThemeProvider theme={args.theme}>
        <SimpleButton {...args} />
      </ThemeProvider>
    ),
    name: 'Default Theme',
  };
  
  /** ✅ Custom Primary Color */
  export const CustomPrimaryColor: Story = {
    args: {
      title: 'Custom Primary Color Button',
      variant: 'md',
      color: 'primary',
      theme: { ...defaultTheme, colors: { ...defaultTheme.colors, primary: '#B7B1F2' } }, // ✅ Editable theme
    },
    render: (args) => (
      <ThemeProvider theme={args.theme}>
        <SimpleButton {...args} />
      </ThemeProvider>
    ),
  };
  
  /** ✅ Custom Font Size */
  export const CustomFontSize: Story = {
    args: {
      title: 'Custom Font Size Button',
      variant: 'md',
      theme: { ...defaultTheme, typography: { ...defaultTheme.typography, fontSizeBase: '20px' } },
    },
    render: (args) => (
      <ThemeProvider theme={args.theme}>
        <SimpleButton {...args} />
        <p style={{ fontSize: args.theme.typography.fontSizeBase }}>This is themed text.</p>
      </ThemeProvider>
    ),
  };
  
  /** ✅ Custom Border Radius */
  export const CustomBorderRadius: Story = {
    args: {
      title: 'Rounded Button',
      variant: 'md',
      theme: { ...defaultTheme, borders: { ...defaultTheme.borders, radiusMd: '40px' } },
    },
    render: (args) => (
      <ThemeProvider theme={args.theme}>
        <SimpleButton {...args} />
      </ThemeProvider>
    ),
  };
  
  /** ✅ Custom Text Color */
  export const CustomTextColor: Story = {
    args: {
      title: 'Custom Text Color Button',
      variant: 'md',
      theme: { ...defaultTheme, colors: { ...defaultTheme.colors, neutral: { ...defaultTheme.colors.neutral, white: '#FF5733' } } },
    },
    render: (args) => (
      <ThemeProvider theme={args.theme}>
        <SimpleButton {...args} />
        <p style={{ color: args.theme.colors.neutral.white }}>This text has a custom theme color.</p>
      </ThemeProvider>
    ),
  };
  
  /** ✅ Custom Padding */
  export const CustomPadding: Story = {
    args: {
      title: 'Padded Button',
      variant: 'md',
      theme: { ...defaultTheme, spacing: { ...defaultTheme.spacing, md: '16px 24px' } },
    },
    render: (args) => (
      <ThemeProvider theme={args.theme}>
        <SimpleButton {...args} />
      </ThemeProvider>
    ),
  };