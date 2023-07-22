import { create } from 'zustand';

type UsersLoginStore = {
  usersLoginList: string[];
  setUsersLoginList: (data: string[]) => void;
};

const useUsersLoginStore = create<UsersLoginStore>((set) => ({
  usersLoginList: [],
  setUsersLoginList: (data) =>
    set((state) => ({
      ...state,
      usersLoginList: [...new Set(data)]
    }))
}));

export default useUsersLoginStore;
