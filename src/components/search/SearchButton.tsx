import React from 'react';
import './searchButton.css';

interface Props {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const SearchButton: React.FC<Props> = (props: Props) => {
  const onClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    props.onClick(e);
  };

  return (
    <div>
      <button type="submit" className="search-button" onClick={onClick}>
        Search
      </button>
    </div>
  );
};
