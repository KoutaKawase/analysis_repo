import React from 'react';
import { SearchInput } from './SearchInput';
import { SearchButton } from './SearchButton';

export const SearchContainer: React.FC = () => {
  return (
    <div>
      <SearchInput />
      <SearchButton />
    </div>
  );
};
