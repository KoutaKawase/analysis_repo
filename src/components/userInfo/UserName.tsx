import React from 'react';

interface Props {
  name: string;
}
export const UserName: React.FC<Props> = (props: Props) => {
  return (
    <p>
      USER ID: <span className="info-value">{props.name}</span>
    </p>
  );
};
