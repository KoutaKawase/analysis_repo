import React, { useState, useEffect } from 'react';
import { SearchContainer } from './search/SearchContainer';
import { UserInfoContainer } from './userInfo/UserInfoContainer';

type ClickEvent = React.MouseEvent<HTMLButtonElement>;
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

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

  const URL = 'https://api.github.com/users/KoutaKawase/repos';
  const result = useFetch(URL);

  const handleClick = (e: ClickEvent): void => {
    e.preventDefault();
    console.log('Click!');
  };

  const handleChange = (e: ChangeEvent): void => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  return (
    <div>
      <h1>Hello World</h1>
      <SearchContainer onClick={handleClick} onChange={handleChange} inputValue={inputValue} />
      <UserInfoContainer />
      <p>{JSON.stringify(result)}</p>
    </div>
  );
};
