import React from 'react';
import { UserName } from './UserName';
import { CreatedAt } from './createdAt';

interface Props {
  userInfo: { avatarURL: string; userName: string; createdAt: string; updatedAt: string };
}

export const UserInfoMessages: React.FC<Props> = (props: Props) => {
  const userName = props.userInfo.userName;

  return (
    <ul>
      <li>
        <UserName name={userName} />
      </li>
      <li>
        <CreatedAt date={props.userInfo.createdAt} />
      </li>
    </ul>
  );
};
