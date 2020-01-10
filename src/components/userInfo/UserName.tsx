import React from 'react';

interface Props {
  name: string;
}
export const UserName: React.FC<Props> = (props: Props) => {
  return <p color="red">{props.name}</p>;
};
