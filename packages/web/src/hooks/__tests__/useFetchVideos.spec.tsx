import users from '../../test/mocks/users.json';

import * as ReactQuery from '@tanstack/react-query';
import { ReactQueryWrapper } from '@test';
import { renderHook, waitFor } from '@testing-library/react';
import { useFetchUsers } from 'hooks/useFetchUsers';

jest.spyOn(ReactQuery, 'useQuery').mockImplementation(
  jest.fn().mockReturnValue({
    data: users,
    isLoading: false,
    isSuccess: true
  })
);

describe('useFetchUsers', () => {
  it('should fetch users from local api', async () => {
    const { result } = renderHook(() => useFetchUsers(), {
      wrapper: ReactQueryWrapper
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toEqual(users);
  });
});
