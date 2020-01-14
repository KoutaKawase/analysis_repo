import React from 'react';
import './analyzed.css';

interface Props {
  useRate: UseRate[];
}

interface UseRate {
  id: string;
  language: string;
  rate: number;
}

// const calculateLanguageUseRate = (langs: string[]): UseRate[] => {
//   const useRate: UseRate[] = [];

//   for (const lang of langs) {
//     //それぞれの言語の個数 / 全体 * 100の100分率で使用率を計算
//     const rate: number = (langs.filter(value => value === lang).length / langs.length) * 100;
//     //TODO　重複をけす
//     useRate.push({
//       id: uuid.v4(),
//       language: lang,
//       rate: Math.floor(rate * 100) / 100,
//     });
//   }

//   //languageが重複したオブジェクトを除いたuseLate配列にする
//   //マジで理解できん
//   const uniqueUseRate: UseRate[] = useRate.filter((data1, index, self) => {
//     return (
//       self.findIndex(data2 => {
//         return data1.language === data2.language;
//       }) === index
//     );
//   });

//   return uniqueUseRate;
// };

export const AnalyzedMessage: React.FC<Props> = (props: Props) => {
  const useRate = props.useRate;

  return (
    <ul className="analyzed-messages">
      {useRate.map(data => {
        return <li key={data.id} className="list-message">{`${data.language}: ${data.rate}%`}</li>;
      })}
    </ul>
  );
};
