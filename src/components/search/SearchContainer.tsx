import React from 'react';
import { SearchInput } from './SearchInput';
import { SearchButton } from './SearchButton';

interface Props {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
}

export const SearchContainer: React.FC<Props> = (props: Props) => {
  const onClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    props.onClick(e);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    props.onChange(e);
  };

  return (
    <form>
      <SearchInput value={props.inputValue} onChange={onChange} />
      <SearchButton onClick={onClick} />
    </form>
  );
};
