import React from 'react';
import './userName.css';

interface Props {
  name: string;
}
export const UserName: React.FC<Props> = (props: Props) => {
  return (
    <p>
      USER ID: <span className="user-name">{props.name}</span>
    </p>
  );
};
