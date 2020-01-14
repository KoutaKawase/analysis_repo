import React, { useState, useEffect } from 'react';
import { SearchContainer } from './search/SearchContainer';
import { UserInfoContainer } from './userInfo/UserInfoContainer';
import './App.css';

type ClickEvent = React.MouseEvent<HTMLButtonElement>;
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

interface UserInfo {
  avatarURL: string;
  userName: string;
  createdAt: string;
  updatedAt: string;
}

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getUserInfoFrom = (json: any): UserInfo => {
  if (!json) {
    return { avatarURL: '', userName: '', createdAt: '', updatedAt: '' };
  }

  if ('message' in json && json.message === 'Not Found') {
    return { avatarURL: '', userName: '', createdAt: '', updatedAt: '' };
  }

  return { avatarURL: json.avatar_url, userName: json.login, createdAt: json.created_at, updatedAt: json.updated_at };
};

export const App: React.FC = () => {
  const [userID, setUserID] = useState('');
  const [requestReposURL, setRequestReposURL] = useState('https://api.github.com/users/matz/repos');
  const [userInfoURL, setUserInfoURL] = useState('https://api.github.com/users/matz');

  const reposJson = useFetch(requestReposURL);
  const usedLanguages: string[] = makeLanguagesArrayFromJson(reposJson);

  const userInfoJson = useFetch(userInfoURL);
  const userInfo: UserInfo = getUserInfoFrom(userInfoJson);
  console.log(userInfo);

  const handleClick = (e: ClickEvent): void => {
    e.preventDefault();
    const reposURL = `https://api.github.com/users/${userID}/repos`;
    setRequestReposURL(reposURL);

    const userInfoURL = `https://api.github.com/users/${userID}`;
    setUserInfoURL(userInfoURL);
  };

  const handleChange = (e: ChangeEvent): void => {
    setUserID(e.target.value);
    return;
  };

  return (
    <div className={'container'}>
      <SearchContainer onClick={handleClick} onChange={handleChange} inputValue={userID} />
      <UserInfoContainer languages={usedLanguages} userInfo={userInfo} />
    </div>
  );
};
