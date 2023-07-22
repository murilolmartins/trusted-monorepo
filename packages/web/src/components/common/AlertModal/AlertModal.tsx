import { useAlertModal } from '@hooks';

import { AlertModalBody } from './components';
import { AlertModalTitle } from './components/AlertModalTitle/AlertModalTilte';

import { Modal } from 'antd';

const AlertModal = () => {
  const { isAlertModalOpen, handleCloseAlertModal, alertModalData } =
    useAlertModal();
  return (
    <Modal
      title={<AlertModalTitle />}
      open={isAlertModalOpen}
      onOk={handleCloseAlertModal}
      onCancel={handleCloseAlertModal}
      okType={alertModalData.title === 'Erro' ? 'danger' : 'primary'}
      centered
      className="alert-modal"
      cancelButtonProps={{ style: { display: 'none' } }}
    >
      <AlertModalBody.Content>{alertModalData.text}</AlertModalBody.Content>
    </Modal>
  );
};

export { AlertModal };
