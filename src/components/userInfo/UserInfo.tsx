import React from 'react';
import { Avatar } from './Avatar';
import { UserName } from './UserName';

interface Props {
  userInfo: { avatarURL: string; userName: string };
}

//TODO props消すかも
export const UserInfo: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <Avatar avatarURL={props.userInfo.avatarURL} />
      <UserName name={props.userInfo.userName} />
    </div>
  );
};
