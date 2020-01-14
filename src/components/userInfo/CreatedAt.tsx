import React, { FC } from 'react';

interface Props {
  date: string;
}

export const CreatedAt: FC<Props> = (props: Props) => {
  const date = props.date;
  return (
    <p>
      アカウント作成日: <span className="info-value">{date}</span>
    </p>
  );
};
