import Link from 'next/link';

import type { IUsersListItem } from '@interfaces';

import * as S from './HomeUsersListCard.styles';

type HomeUsersListCardProps = Pick<
  IUsersListItem,
  'avatar_url' | 'name' | 'url' | 'id' | 'login'
>;

const HomeUsersListCard = ({
  name,
  avatar_url,
  url,
  id,
  login
}: HomeUsersListCardProps) => {
  return (
    <Link href={url} target="_blank">
      <S.HomeUsersListCardContainer>
        <S.HomeUsersListCardImageContainer>
          <S.HomeUsersListCardImage
            src={avatar_url}
            alt={name}
            priority
            width={100}
            height={100}
            style={{
              borderRadius: '50%'
            }}
          />
        </S.HomeUsersListCardImageContainer>
        <S.HomeUsersListCardInfoContainer>
          <S.HomeUsersListCardTitle className="text_primary_color">
            {name}
          </S.HomeUsersListCardTitle>
          <S.HomeUsersListCardTitle className="text_primary_color">
            {login}
          </S.HomeUsersListCardTitle>
          <S.HomeUsersListCardTitle className="text_primary_color">
            {id}
          </S.HomeUsersListCardTitle>
        </S.HomeUsersListCardInfoContainer>
      </S.HomeUsersListCardContainer>
    </Link>
  );
};

export { HomeUsersListCard };
