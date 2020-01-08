import React from 'react';
import { Chart } from './Chart';
import { AnalyzedMessage } from './AnalyzedMessage';

export const ChartArea: React.FC = () => {
  return (
    <div>
      {'This is chartarea'}
      <Chart />
      <AnalyzedMessage />
    </div>
  );
};
