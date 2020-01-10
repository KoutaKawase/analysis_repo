import React from 'react';
import { Avatar } from './Avatar';
import { UserName } from './UserName';

interface Props {
  userID: string;
}

//TODO props消すかも
export const UserInfo: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <Avatar />
      <UserName />
    </div>
  );
};
