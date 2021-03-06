import React from 'react';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput: React.FC<Props> = (props: Props) => {
  const value = props.value;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    props.onChange(e);
  };

  return <input type="text" value={value} placeholder="Search from GitHub ID..." onChange={onChange} />;
};
