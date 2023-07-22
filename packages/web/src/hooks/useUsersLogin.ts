/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from 'react';

import useUsersLoginStore from 'store/usersLogin';

const useUsersLogin = () => {
  const { setUsersLoginList, usersLoginList } = useUsersLoginStore();

  const handleAddUserLogin = useCallback(
    (userLogin: string, usersLogin: string[]) => {
      setUsersLoginList([userLogin, ...usersLogin]);
    },
    []
  );

  const handleRemoveUserLogin = (userLogin: string) => {
    const newUsersLoginList = usersLoginList.filter(
      (login) => login !== userLogin
    );
    setUsersLoginList(newUsersLoginList);
  };

  const handleResetUsersLogin = () => {
    setUsersLoginList([]);
  };

  return {
    usersLoginList,
    handleAddUserLogin,
    handleRemoveUserLogin,
    handleResetUsersLogin
  };
};

export { useUsersLogin };
