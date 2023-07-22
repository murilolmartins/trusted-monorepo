import { PageSection } from '@components-common';

import { HomeUsersListCard } from './components/HomeUsersListCard/HomeUsersListCard';
import { HomeUsersListHeader } from './components/HomeUsersListHeader/HomeUsersListHeader';
import HomeUsersListOrderSelect from './components/HomeUsersListOrderSearch/HomeUsersListOrderSearch';
import * as S from './HomeUsersList.styles';
import { useUsers } from './hooks/useUsers';

import { List } from 'antd';

const HomeUsersList = () => {
  const { searchUsers, handleFilterSearchUsers, users } = useUsers();

  return (
    <PageSection>
      <S.HomeUsersListContainer>
        <HomeUsersListHeader>
          <HomeUsersListOrderSelect
            handleOrderSearchUsers={handleFilterSearchUsers}
          />
        </HomeUsersListHeader>
        <List
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          grid={{ gutter: 18, xs: 1, sm: 1, md: 2, xl: 3, xxl: 3, lg: 3 }}
          pagination={{
            position: 'bottom',
            align: 'center',
            pageSize: 9
          }}
          loading={users.length === 0}
          dataSource={searchUsers.length > 0 ? searchUsers : users}
          renderItem={(item) => (
            <List.Item
              style={{ padding: '20px', minWidth: '250px' }}
              key={item.id}
            >
              <HomeUsersListCard
                avatar_url={item.avatar_url}
                name={item.name}
                url={item.html_url}
                id={item.id}
                login={item.login}
              />
            </List.Item>
          )}
        />
      </S.HomeUsersListContainer>
    </PageSection>
  );
};

export default HomeUsersList;
