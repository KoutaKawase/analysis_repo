import React, { useState, useEffect } from 'react';
import { SearchContainer } from './search/SearchContainer';
import { UserInfoContainer } from './userInfo/UserInfoContainer';

type ClickEvent = React.MouseEvent<HTMLButtonElement>;
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const makeLanguagesArrayFromJson = (json: any): string[] => {
  const usedLanguages: string[] = [];

  //Effect前にも呼ばれる　その時jsonがundefinedなので消すとエラーに鳴る
  if (!json) {
    return [];
  }

  //無効なユーザーIDなら空配列を返すだけにしてエラーが出ないようにする
  if ('message' in json && json.message === 'Not Found') {
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
  const [userID, setUserID] = useState('');
  const [requestReposURL, setRequestReposURL] = useState('https://api.github.com/users/matz/repos');

  const resultJson = useFetch(requestReposURL);
  const usedLanguages = makeLanguagesArrayFromJson(resultJson);

  const handleClick = (e: ClickEvent): void => {
    e.preventDefault();
    const URL = `https://api.github.com/users/${userID}/repos`;
    setRequestReposURL(URL);
  };

  const handleChange = (e: ChangeEvent): void => {
    setUserID(e.target.value);
    return;
  };

  return (
    <div>
      <h1>Hello World</h1>
      <SearchContainer onClick={handleClick} onChange={handleChange} inputValue={userID} />
      <UserInfoContainer languages={usedLanguages} userID={userID} />
    </div>
  );
};
