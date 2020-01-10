import React from 'react';

interface Props {
  avatarURL: string;
}

export const Avatar: React.FC<Props> = (props: Props) => {
  return <img src={props.avatarURL} alt="userIcon" height="120px" width="120px" />;
};
