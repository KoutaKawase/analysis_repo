import React, { useState, useEffect } from 'react';
import { SearchContainer } from './search/SearchContainer';
import { UserInfoContainer } from './userInfo/UserInfoContainer';

type ClickEvent = React.MouseEvent<HTMLButtonElement>;
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const makeLanguagesArrayFromJson = (json: any): string[] => {
  const usedLanguages: string[] = [];

  if (!json) {
    return [];
  }
  for (const repo of json) {
    usedLanguages.push(repo.language);
  }

  return usedLanguages;
};
//TODO: なんかdataって名前が曖昧すぎてもう少しわかりやすくする
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useFetch = (url: string): any => {
  const [data, updateData] = useState(undefined);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = await fetch(url);
      const json = await response.json();
      updateData(json);
    };
    fetchData();
  }, [url]);

  return data;
};

export const App: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const URL = `https://api.github.com/users/matz/repos`;
  const resultJson = useFetch(URL);
  const usedLanguages = makeLanguagesArrayFromJson(resultJson);

  const handleClick = (e: ClickEvent): void => {
    e.preventDefault();
    console.log('Click!');
  };

  const handleChange = (e: ChangeEvent): void => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };
  //TODO: keyにindexはクソなので修正
  return (
    <div>
      <h1>Hello World</h1>
      <SearchContainer onClick={handleClick} onChange={handleChange} inputValue={inputValue} />
      <UserInfoContainer languages={usedLanguages} />
    </div>
  );
};
