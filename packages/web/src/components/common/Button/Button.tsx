import { ButtonType } from '@enums';

import * as S from './Button.styles';

import { ButtonProps as ButtonAntdProps } from 'antd';

interface ButtonProps extends ButtonAntdProps {
  buttontype?: ButtonType;
}

const Button = ({
  buttontype = ButtonType.SECONDARY,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <S.ButtonContainer buttontype={buttontype} {...rest}>
      {children}
    </S.ButtonContainer>
  );
};

export { Button };
