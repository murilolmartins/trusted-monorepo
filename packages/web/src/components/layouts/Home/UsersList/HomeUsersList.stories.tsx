import HomeUsersList from './HomeUsersList';

import type { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const meta: Meta<typeof HomeUsersList> = {
  title: 'Sections/HomeUsersList',
  component: HomeUsersList,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>{Story()}</QueryClientProvider>
    )
  ]
};

type Story = StoryObj<typeof HomeUsersList>;

export const Basic: Story = {
  render: () => <HomeUsersList />
};

export default meta;
