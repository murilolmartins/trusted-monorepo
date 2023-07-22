import { ButtonType } from '@enums';

import { Button } from './Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button
};

type Story = StoryObj<typeof Button>;

export const Secondary: Story = {
  render: () => (
    <Button buttontype={ButtonType.SECONDARY} href="/">
      Button
    </Button>
  )
};

export default meta;
