import type { Meta, StoryObj } from '@storybook/react';
import { Input, Icon } from '@/shared/ui';

const meta = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    value: 'Text',
  },
};

export const WithIcon: Story = {
  args: {
    variant: 'default',
    value: 'Text',
    endNode: <Icon iconName="eye" />,
  },
};
