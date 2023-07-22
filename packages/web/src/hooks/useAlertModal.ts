/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from 'react';

import type { AlertModalData } from '@interfaces';

import useAlertModalStore from 'store/alertModal';

const useAlertModal = () => {
  const {
    alertModalData,
    isAlertModalOpen,
    setAlertModalData,
    setIsAlertModalOpen
  } = useAlertModalStore();

  const handleOpenAlertModal = useCallback((alertData: AlertModalData) => {
    setAlertModalData(alertData);
    setIsAlertModalOpen(true);
  }, []);

  const handleCloseAlertModal = useCallback(() => {
    const iframeModal = document.getElementById('responsive-iframe');

    iframeModal?.setAttribute('src', iframeModal.getAttribute('src')!);
    setIsAlertModalOpen(false);
  }, []);

  return {
    alertModalData,
    isAlertModalOpen,
    handleOpenAlertModal,
    handleCloseAlertModal
  };
};

export { useAlertModal };
