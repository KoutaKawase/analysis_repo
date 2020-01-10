import React from 'react';
import { UserInfo } from './UserInfo';
import { ChartArea } from './ChartArea';

interface Props {
  languages: string[];
  userID: string;
}

export const UserInfoContainer: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <ChartArea languages={props.languages} />
      <UserInfo userID={props.userID} />
    </div>
  );
};
