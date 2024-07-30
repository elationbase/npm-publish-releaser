import type { Meta, StoryObj } from '@storybook/react';
import { expect, screen, within } from '@storybook/test';
import { Action } from './action';

const meta = {
  args: {
    children: 'Button',
  },
  component: Action,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Primitives/Action',
} satisfies Meta<typeof Action>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect(button).toHaveTextContent('Button');
    expect(button).toHaveClass('ak-bg-primary');
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect(button).toHaveAttribute('disabled');
  },
};

export const FullWidth: Story = {
  parameters: {
    layout: 'padded',
  },
  args: {
    isFullWidth: true,
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect(button).toHaveClass('ak-w-full');
  },
};

export const WithIcon: Story = {
  args: {
    icon: 'search',
    variant: 'secondary',
  },
};

export const IconPositionRight: Story = {
  args: {
    icon: 'chevron-right',
    variant: 'secondary',
    iconPosition: 'right',
  },
};

export const WithIconOnly: Story = {
  args: {
    icon: 'user',
    variant: 'secondary',
    children: '',
    className: 'ak-rounded-full',
  },
};

export const TypeSubmit: Story = {
  args: {
    type: 'submit',
    children: 'Submit Button',
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect(button).toHaveAttribute('type', 'submit');
  },
};

export const AsAnchor: Story = {
  args: {
    as: 'a',
    href: 'https://elationbase.com',
    target: '_blank',
    children: 'Anchor Link',
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const anchor = within(canvasElement).getByText('Anchor Link');
    expect(anchor).toHaveProperty('href', 'https://elationbase.com/');
    expect(anchor).toHaveProperty('target', '_blank');
  },
};

export const AsChild: Story = {
  args: {
    as: 'span',
    children: 'I am just a span tag',
  },
  play: async () => {
    const span = screen.getByText('I am just a span tag');
    expect(span).toBeInTheDocument();
  },
};
