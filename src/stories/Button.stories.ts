import type { Meta, StoryObj } from '@storybook/react';

import { MuiButton } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/Button',
  component: MuiButton,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof MuiButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    color: 'primary',
    label: 'Button',
    onClick: () => alert('Clicked!'),
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    color: 'primary',
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    label: 'Button',
    backgroundColor: '#ffffff',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    label: 'Button',
    backgroundColor: '#ffffff',
  },
};

export const Contained: Story = {
  args: {
    variant: 'contained',
    label: 'Button',
    color: 'warning',
  },
};

export const Square: Story = {
  args: {
    variant: 'contained',
    label: 'Button',
    color: 'success',
    radius: 0,
  },
};
