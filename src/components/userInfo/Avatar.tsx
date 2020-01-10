import React from 'react';

interface Props {
  image: string;
}

export const Avatar: React.FC<Props> = (props: Props) => {
  return <img src={props.image} alt={'avatar image'} width={'120px'} height={'120px'} />;
};
