import React, { useState } from 'react';
import { SearchInput } from './SearchInput';
import { SearchButton } from './SearchButton';

export const SearchContainer: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    console.log('clicked!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  return (
    <form>
      <SearchInput value={inputValue} onChange={handleChange} />
      <SearchButton onClick={handleClick} />
    </form>
  );
};
