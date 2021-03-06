import React from 'react';
import { Avatar } from './Avatar';
import './avatarArea.css';

interface Props {
  avatarURL: string;
}

export const AvatarArea: React.FC<Props> = (props: Props) => {
  const imageExists = props.avatarURL !== '';

  return (
    <div className="avatar-area">{imageExists ? <Avatar image={props.avatarURL} /> : <p>{'User Not Found!'}</p>}</div>
  );
};
