import HomeUsersListOrderSearch from './HomeUsersListOrderSearch';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof HomeUsersListOrderSearch> = {
  title: 'Sections/HomeUsersList/Components/HomeUsersListOrderSearch',
  component: HomeUsersListOrderSearch
};

type Story = StoryObj<typeof HomeUsersListOrderSearch>;

export const Basic: Story = {
  render: () => (
    <HomeUsersListOrderSearch
      handleOrderSearchUsers={() => console.log('handleOrderSearchUsers')}
    />
  )
};

export default meta;
