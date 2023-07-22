/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from 'react';

import { AlertModalData } from '@interfaces';

import useAlertModalStore from 'store/alertModal';

const useAlertModal = () => {
  const {
    videoModalData,
    isAlertModalOpen,
    setAlertModalData,
    setIsAlertModalOpen
  } = useAlertModalStore();

  const handleOpenAlertModal = useCallback((videoData: AlertModalData) => {
    setAlertModalData(videoData);
    setIsAlertModalOpen(true);
  }, []);

  const handleCloseAlertModal = useCallback(() => {
    const iframeModal = document.getElementById('responsive-iframe');

    iframeModal?.setAttribute('src', iframeModal.getAttribute('src')!);
    setIsAlertModalOpen(false);
  }, []);

  return {
    videoModalData,
    isAlertModalOpen,
    handleOpenAlertModal,
    handleCloseAlertModal
  };
};

export { useAlertModal };
