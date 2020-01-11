import React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';

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

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={useRate}
        cx={'50%'}
        cy={'50%'}
        nameKey={'language'}
        dataKey={'rate'}
        innerRadius={90}
        outerRadius={140}
        fill="#82ca9d"
        label={true}
      />
      <Tooltip />
    </PieChart>
  );
};
