import React from 'react';
import { Chart } from './Chart';
import { AnalyzedMessage } from './AnalyzedMessage';
import uuid from 'uuid';
import './chartArea.css';

interface Props {
  languages: string[];
}

interface UseRate {
  id: string;
  language: string;
  rate: number;
}

const calculateLanguageUseRate = (langs: string[]): UseRate[] => {
  const useRate: UseRate[] = [];

  for (const lang of langs) {
    //それぞれの言語の個数 / 全体 * 100の100分率で使用率を計算
    const rate: number = (langs.filter(value => value === lang).length / langs.length) * 100;
    //TODO　重複をけす
    useRate.push({
      id: uuid.v4(),
      language: lang !== null ? lang : 'その他',
      rate: Math.floor(rate * 100) / 100,
    });
  }

  //languageが重複したオブジェクトを除いたuseLate配列にする
  //マジで理解できん
  const uniqueUseRate: UseRate[] = useRate.filter((data1, index, self) => {
    return (
      self.findIndex(data2 => {
        return data1.language === data2.language;
      }) === index
    );
  });

  return uniqueUseRate;
};

export const ChartArea: React.FC<Props> = (props: Props) => {
  const langs = props.languages;
  const useRate = calculateLanguageUseRate(langs);

  //無効なユーザー名ならChartは表示させない
  return (
    <div className="chart-area">
      {useRate.length !== 0 ? <Chart useRate={useRate} /> : ''}
      <AnalyzedMessage useRate={useRate} />
    </div>
  );
};
