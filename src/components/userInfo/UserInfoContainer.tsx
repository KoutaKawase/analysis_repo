import React from 'react';
import { UserInfo } from './UserInfo';
import { ChartArea } from './ChartArea';

export const UserInfoContainer: React.FC = () => {
  return (
    <div>
      <ChartArea />
      <UserInfo />
    </div>
  );
};
