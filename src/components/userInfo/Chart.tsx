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
        dataKey={'rate'}
        isAnimationActive={true}
        data={useRate}
        cx={'50%'}
        cy={'50%'}
        nameKey={'language'}
        outerRadius={80}
        fill="#83ca9d"
        label
      />
      <Tooltip />
    </PieChart>
  );
};
