import React, { useState } from 'react';
import { SearchContainer } from './search/SearchContainer';
import { UserInfoContainer } from './userInfo/UserInfoContainer';

type ClickEvent = React.MouseEvent<HTMLButtonElement>;
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export const App: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

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
    </div>
  );
};
