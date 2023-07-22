import { UsersListProvider } from '@contexts';
import { UsersListKeys } from '@enums';
import { useUsersList } from '@hooks';

import { render } from '@testing-library/react';

describe('useUsersList', () => {
  it('should return default values', () => {
    const TestComponent = () => {
      const { data, isLoading, orderTerm } = useUsersList();

      return (
        <>
          <span>{`initialData: ${data.initialData.length}`}</span>
          <span>{`search: ${data.search.length}`}</span>
          <span>{`isLoading: ${isLoading}`}</span>
          <span>{`orderTerm: ${orderTerm}`}</span>
        </>
      );
    };

    const { getByText } = render(
      <UsersListProvider>
        <TestComponent />
      </UsersListProvider>
    );

    expect(getByText('initialData: 0')).toBeTruthy();
    expect(getByText('search: 0')).toBeTruthy();
    expect(getByText('isLoading: true')).toBeTruthy();
    expect(getByText(`orderTerm: ${UsersListKeys.CREATED_AT}`)).toBeTruthy();
  });
});
