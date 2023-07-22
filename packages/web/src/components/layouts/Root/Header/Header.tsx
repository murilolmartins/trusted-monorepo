import logo from '@images/logo.png';

import * as S from './Header.styles';

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderLogo src={logo} alt="Leadster logo" />
    </S.HeaderContainer>
  );
};

export { Header };
