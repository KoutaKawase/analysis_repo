import React, { FC } from 'react';

interface Props {
  date: string;
}

export const UpdatedAt: FC<Props> = (props: Props) => {
  const date = props.date;

  return (
    <p>
      最終更新日: <span className="info-value">{date}</span>
    </p>
  );
};
