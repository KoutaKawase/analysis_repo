import React from 'react';
import { AvatarArea } from './AvatarArea';
import { UserName } from './UserName';
import './userInfo.css';

interface Props {
  userInfo: { avatarURL: string; userName: string; createdAt: string; updatedAt: string };
}

//TODO props消すかも
export const UserInfo: React.FC<Props> = (props: Props) => {
  return (
    <div className="user-info">
      <AvatarArea avatarURL={props.userInfo.avatarURL} />
      <UserName name={props.userInfo.userName} />
    </div>
  );
};
