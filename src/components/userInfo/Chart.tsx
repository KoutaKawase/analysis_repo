import React from 'react';
import { PieChart, Pie, Sector } from 'recharts';

interface Props {
  languages: string[];
}

export const Chart: React.FC<Props> = (props: Props) => {
  const languages = props.languages;
  console.log(languages);
  return <div>{'This is Chart'}</div>;
};
