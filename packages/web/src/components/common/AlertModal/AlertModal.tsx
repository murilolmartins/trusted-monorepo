import { useAlertModal } from '@hooks';

import { AlertModalBody } from './components';

import { Modal } from 'antd';

const AlertModal = () => {
  const { isAlertModalOpen, handleCloseAlertModal, videoModalData } =
    useAlertModal();
  return (
    <Modal
      open={isAlertModalOpen}
      onCancel={handleCloseAlertModal}
      centered
      className="alert-modal"
      cancelButtonProps={{ style: { display: 'none' } }}
      okButtonProps={{ style: { display: 'none' } }}
    >
      <AlertModalBody.Content>oi</AlertModalBody.Content>
    </Modal>
  );
};

export { AlertModal };
