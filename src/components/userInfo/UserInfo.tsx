import React from 'react';
import { AvatarArea } from './AvatarArea';
import { UserName } from './UserName';

interface Props {
  userInfo: { avatarURL: string; userName: string };
}

//TODO props消すかも
export const UserInfo: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <AvatarArea avatarURL={props.userInfo.avatarURL} />
      <UserName name={props.userInfo.userName} />
    </div>
  );
};
