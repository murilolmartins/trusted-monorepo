import { useAlertModal } from '@hooks';

import * as S from './AlertModalTitle.styles';

const AlertModalTitle = () => {
  const { alertModalData } = useAlertModal();
  return (
    <S.AlertModalTitleContainer>
      <S.AlertModalText type={alertModalData.title}>
        {alertModalData.title}
      </S.AlertModalText>
    </S.AlertModalTitleContainer>
  );
};

export { AlertModalTitle };
