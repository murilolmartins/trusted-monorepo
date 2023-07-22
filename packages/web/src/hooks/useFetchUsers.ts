import { getUsers } from '@services';
import { useQuery } from '@tanstack/react-query';

export function useFetchUsers() {
  return useQuery(['users'], getUsers, {
    initialData: []
  });
}
