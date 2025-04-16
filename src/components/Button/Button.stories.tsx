import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps } from './Button';

const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: [
        'primary',
        'secondary',
        'outline',
        'destructive',
        'ghost',
        'link',
      ],
      control: { type: 'select' },
    },
  },
  args: {
    children: 'Click me',
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {
    variant: 'primary',
  },
  render: args => <Button {...args} />,
};
