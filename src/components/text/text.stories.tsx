import type { Meta } from '@storybook/react';
import { Text } from './text';

const meta = {
  argTypes: {
    as: {
      control: {
        type: 'select',
      },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'],
    },
  },
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
  },
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Primitives/Text',
} satisfies Meta<typeof Text>;

export default meta;

export const Base = {
  args: {
    size: 'base',
  },
};

export const Title1 = {
  args: {
    size: 'title1',
  },
};

export const Title2 = {
  args: {
    size: 'title2',
  },
};

export const Title3 = {
  args: {
    size: 'title3',
  },
};

export const Title4 = {
  args: {
    size: 'title4',
  },
};

export const Body1 = {
  args: {
    size: 'body1',
  },
};

export const Body2 = {
  args: {
    size: 'body2',
  },
};

export const Body3 = {
  args: {
    size: 'body3',
  },
};

export const Body4 = {
  args: {
    size: 'body4',
  },
};

export const Body5 = {
  args: {
    size: 'body5',
  },
};

export const Body6 = {
  args: {
    size: 'body6',
  },
};

export const ModifiedTag = {
  args: {
    as: 'span',
    children: 'Looks like a H1 but I am a span',
    size: 'title1',
  },
};

export const NestedText = {
  args: {
    children: (
      <Text size="title1">
        Hello{' '}
        <Text as="span" size="title1" color="primary">
          elationbase
        </Text>
      </Text>
    ),
    size: 'title1',
    role: 'heading',
  },
};
