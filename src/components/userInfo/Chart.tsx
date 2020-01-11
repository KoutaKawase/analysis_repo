import React from 'react';

interface Props {
  useRate: UseRate[];
}

interface UseRate {
  id: string;
  language: string;
  rate: number;
}

export const Chart: React.FC<Props> = (props: Props) => {
  const useRate = props.useRate;

  console.log(useRate);
  return <div>{'This is Chart'}</div>;
};
