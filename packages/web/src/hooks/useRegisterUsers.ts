import { AlertModalType } from '@enums';

import { useAlertModal } from './useAlertModal';
import { useUsersLogin } from './useUsersLogin';

import { registerUsers } from '@services';
import { useMutation } from '@tanstack/react-query';

export const useRegisterUsers = () => {
  const { handleResetUsersLogin } = useUsersLogin();
  const { handleOpenAlertModal } = useAlertModal();

  const mutation = useMutation({
    mutationFn: registerUsers,
    onSuccess: () => {
      handleOpenAlertModal({
        title: AlertModalType.SUCCESS,
        text: 'Todos os usuários foram cadastrados com sucesso.'
      });
      handleResetUsersLogin();
    },
    onError: () => {
      handleOpenAlertModal({
        title: AlertModalType.ERROR,
        text: 'Ocorreu um erro ao cadastrar os usuários.'
      });
    }
  });

  return { mutation };
};
