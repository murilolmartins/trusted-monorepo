import { AlertModalType } from '@enums';
import type { AlertModalData } from '@interfaces';

import { create } from 'zustand';

type AlertModalStore = {
  alertModalData: AlertModalData;
  isAlertModalOpen: boolean;
  setAlertModalData: (data: AlertModalData) => void;
  setIsAlertModalOpen: (isOpen: boolean) => void;
};

const useAlertModalStore = create<AlertModalStore>((set) => ({
  alertModalData: {
    title: AlertModalType.SUCCESS,
    text: ''
  },
  isAlertModalOpen: false,
  setAlertModalData: (data) =>
    set((state) => ({
      ...state,
      alertModalData: data
    })),
  setIsAlertModalOpen: (isOpen: boolean) =>
    set((state) => ({
      ...state,
      isAlertModalOpen: isOpen
    }))
}));

export default useAlertModalStore;
