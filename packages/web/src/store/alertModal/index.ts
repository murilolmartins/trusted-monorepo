import { AlertModalData } from '@interfaces';

import { create } from 'zustand';

type AlertModalStore = {
  videoModalData: AlertModalData;
  isAlertModalOpen: boolean;
  setAlertModalData: (data: AlertModalData) => void;
  setIsAlertModalOpen: (isOpen: boolean) => void;
};

const useAlertModalStore = create<AlertModalStore>((set) => ({
  videoModalData: {
    url: '',
    title: '',
    description: ''
  },
  isAlertModalOpen: false,
  setAlertModalData: (data) =>
    set((state) => ({
      ...state,
      videoModalData: data
    })),
  setIsAlertModalOpen: (isOpen: boolean) =>
    set((state) => ({
      ...state,
      isAlertModalOpen: isOpen
    }))
}));

export default useAlertModalStore;
