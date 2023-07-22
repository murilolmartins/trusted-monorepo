import { useUsersLogin } from 'hooks/useUsersLogin';

const useRegisterUsersForm = () => {
  const { handleAddUserLogin, usersLoginList } = useUsersLogin();

  const handleOnSubmit = (data: { name: string }) => {
    handleAddUserLogin(data.name, usersLoginList);
  };

  return {
    handleOnSubmit
  };
};

export { useRegisterUsersForm };
