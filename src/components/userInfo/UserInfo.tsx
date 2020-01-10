import React from 'react';
import { Avatar } from './Avatar';
import { UserName } from './UserName';

interface Props {
  userID: string;
}

export const UserInfo: React.FC<Props> = (props: Props) => {
  console.log(props.userID);
  return (
    <div>
      <Avatar />
      <UserName />
    </div>
  );
};
