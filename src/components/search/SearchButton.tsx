import React from 'react';

interface Props {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const SearchButton: React.FC<Props> = (props: Props) => {
  const onClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    props.onClick(e);
  };

  return (
    <div>
      <button type="submit" onClick={onClick}>
        Search
      </button>
    </div>
  );
};
