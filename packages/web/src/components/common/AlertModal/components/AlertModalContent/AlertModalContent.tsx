import type { ReactNode } from 'react';

import * as S from './AlertModalContent.styles';

interface AlertModalContentProps {
  children: ReactNode;
}

const AlertModalContent = ({ children }: AlertModalContentProps) => {
  return (
    <S.AlertModalContentContainer>{children}</S.AlertModalContentContainer>
  );
};

export { AlertModalContent };
