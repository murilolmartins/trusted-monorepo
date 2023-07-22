import type { IUsersListItem } from './usersList';

export type AlertModalData = Pick<
  IUsersListItem,
  'url' | 'title' | 'description'
>;
