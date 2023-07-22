import { UsersCategory } from '@enums';
import { IUsersListItem } from '@interfaces';

export const videoListValues: IUsersListItem[] = Object.values(UsersCategory)
  .map((category) =>
    Array.from({ length: 9 }, (_, i) => ({
      id: i,
      title: `Como aumentar ${category} feat. Traktor ${i}`,
      category,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis ultrices aliquam, nunc nisl ultricies nunc, quis ultrices nisl nisl eget nisl.`,
      url: `https://www.youtube.com/embed/kvZxxVLApxw`,
      thumbnail: `/public/images/thumbnail.png`,
      createdAt: '2021-07-01T00:00:00.000Z'
    }))
  )
  .flat(1);
