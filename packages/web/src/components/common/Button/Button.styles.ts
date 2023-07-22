import { ButtonType } from '@enums';

import { Button } from 'antd';
import styled, { css } from 'styled-components';

const secondary = css`
  color: ${({ theme }) => theme.colors.black} !important;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};
  :hover {
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
  :focus {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border: none;
  }
`;

const ButtonTypeMap = {
  [ButtonType.SECONDARY]: secondary
};

interface ButtonContainerProps {
  buttontype?: ButtonType;
}

export const ButtonContainer = styled(Button)<ButtonContainerProps>`
  border-radius: 15px;
  ${({ buttontype }) => buttontype && ButtonTypeMap[buttontype]}
`;
