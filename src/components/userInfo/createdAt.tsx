import React, { FC } from 'react';

interface Props {
  date: string;
}

export const CreatedAt: FC<Props> = (props: Props) => {
  const createdAt = props.date;
  return <p>アカウント作成日: {createdAt}</p>;
};