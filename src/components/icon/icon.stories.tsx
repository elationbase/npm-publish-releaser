import type { Meta } from '@storybook/react';
import { Icon } from './icon';

const meta = {
  argTypes: {
    size: {
      control: {
        type: 'range',
        min: 20,
        max: 200,
        step: 1,
      },
    },
    fill: {
      control: {
        type: 'color',
      },
    },
  },
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Primitives/Icon',
} satisfies Meta<typeof Icon>;

export default meta;

export const Base = {
  args: {},
};

export const ModifyClass = {
  args: {
    className: 'ak-bg-primary ak-text-error ak-rounded-full',
  },
};
