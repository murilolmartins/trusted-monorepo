import { AlertModalType } from '@enums';

import styled from 'styled-components';

interface AlertModalTextProps {
  type: AlertModalType;
}

export const AlertModalTitleContainer = styled.div``;

export const AlertModalText = styled.h3<AlertModalTextProps>`
  color: ${({ theme, type }) => {
    switch (type) {
      case AlertModalType.SUCCESS:
        return theme.colors.primary;
      case AlertModalType.ERROR:
        return theme.colors.red_400;
      default:
        return theme.colors.black;
    }
  }};
`;
