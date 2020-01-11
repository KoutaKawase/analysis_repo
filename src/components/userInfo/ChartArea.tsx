import React from 'react';
import { Chart } from './Chart';
import { AnalyzedMessage } from './AnalyzedMessage';

interface Props {
  languages: string[];
}

export const ChartArea: React.FC<Props> = (props: Props) => {
  return (
    <div>
      {'This is chartarea'}
      <Chart languages={props.languages} />
      <AnalyzedMessage languages={props.languages} />
    </div>
  );
};
