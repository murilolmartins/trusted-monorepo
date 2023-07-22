import users from '../../../../../../test/mocks/users.json';
import { HomeUsersListCard } from './HomeUsersListCard';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof HomeUsersListCard> = {
  title: 'Sections/HomeUsersList/Components/HomeUsersListCard',
  component: HomeUsersListCard
};

const props = {
  name: users[0].name,
  avatar_url: users[0].avatar_url,
  url: users[0].html_url,
  id: users[0].id,
  login: users[0].login
};

type Story = StoryObj<typeof HomeUsersListCard>;

export const Basic: Story = {
  render: () => <HomeUsersListCard {...props} />
};

export default meta;
