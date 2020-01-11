import React from 'react';
import { Avatar } from './Avatar';

interface Props {
  avatarURL: string;
}

export const AvatarArea: React.FC<Props> = (props: Props) => {
  const imageExists = props.avatarURL !== '';

  return <div>{imageExists ? <Avatar image={props.avatarURL} /> : <p>{'User Not Found!'}</p>}</div>;
};
