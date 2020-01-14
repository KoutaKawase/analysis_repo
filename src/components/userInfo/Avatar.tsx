import React from 'react';

interface Props {
  image: string;
}

export const Avatar: React.FC<Props> = (props: Props) => {
  return <img className="avatar" src={props.image} alt="user avatar" width={'150px'} height={'150px'} />;
};
