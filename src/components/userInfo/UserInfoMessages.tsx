import React from 'react';
import { UserName } from './UserName';

interface Props {
  userInfo: { avatarURL: string; userName: string; createdAt: string; updatedAt: string };
}

export const UserInfoMessages: React.FC<Props> = (props: Props) => {
  return (
    <ul>
      <li>
        <UserName name={props.userInfo.userName} />
      </li>
    </ul>
  );
};
