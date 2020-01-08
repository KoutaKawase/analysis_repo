import React from 'react';
import { SearchContainer } from './search/SearchContainer';
import { UserInfoContainer } from './userInfo/UserInfoContainer';

export const App: React.FC = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <SearchContainer />
      <UserInfoContainer />
    </div>
  );
};
