import React from 'react';
import { UserName } from './UserName';
import { CreatedAt } from './createdAt';
import { UpdatedAt } from './UpdatedAt';

interface Props {
  userInfo: { avatarURL: string; userName: string; createdAt: string; updatedAt: string };
}

const convertYYYYMMDDfrom = (timeStamp: number): string => {
  const date = new Date(timeStamp);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDay();

  return `${year}年${month}月${day}日`;
};

export const UserInfoMessages: React.FC<Props> = (props: Props) => {
  const userName = props.userInfo.userName;
  const timeStampOfCreatedAt = Date.parse(props.userInfo.createdAt);
  const timeStampOfUpdatedAt = Date.parse(props.userInfo.updatedAt);
  const createdAt = convertYYYYMMDDfrom(timeStampOfCreatedAt);
  const updatedAt = convertYYYYMMDDfrom(timeStampOfUpdatedAt);

  return (
    <ul>
      <li>
        <UserName name={userName} />
      </li>
      <li>
        <CreatedAt date={createdAt} />
      </li>
      <li>
        <UpdatedAt date={updatedAt} />
      </li>
    </ul>
  );
};
