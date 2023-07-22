/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from 'react';

import { useFetchUsers } from '@hooks';
import type { IUsersListItem } from '@interfaces';

export const useUsers = () => {
  const { data: users, isLoading } = useFetchUsers();
  const [searchUsers, setSearchUsers] = useState<IUsersListItem[]>([]);

  const handleFilterSearchUsers = useCallback(
    (searchInput: string) => {
      const fiteredList = users.filter(({ id, login }) => {
        const isId = id.toString().includes(searchInput);
        const isLogin = login.toLowerCase().includes(searchInput.toLowerCase());

        return isId || isLogin;
      });

      setSearchUsers(fiteredList);
    },
    [users]
  );

  const handleResetSearchUsers = useCallback(() => {
    setSearchUsers([]);
  }, []);

  return {
    handleFilterSearchUsers,
    handleResetSearchUsers,
    searchUsers,
    users,
    isLoading
  };
};
