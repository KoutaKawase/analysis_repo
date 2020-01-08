import React, { useState } from 'react';
import { SearchInput } from './SearchInput';
import { SearchButton } from './SearchButton';

export const SearchContainer: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    console.log('clicked!');
  };

  return (
    <form>
      <SearchInput />
      <SearchButton onClick={handleClick} />
    </form>
  );
};
