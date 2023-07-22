import dynamic from 'next/dynamic';

import { PageSection } from '@components-common';
import { theme } from '@styles';

import { Spin } from 'antd';

const HomeUsersList = dynamic(() => import('./UsersList/HomeUsersList'), {
  loading: () => (
    <PageSection height="500px">
      <Spin size="large" style={{ color: theme.colors.primary }} />
    </PageSection>
  ),
  ssr: false
});

const HomeLayout = () => {
  return (
    <>
      <HomeUsersList />
    </>
  );
};

export { HomeLayout };
