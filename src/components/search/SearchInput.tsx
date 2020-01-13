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

  return (
    <div>
      <label htmlFor={'user-id'}></label>
      <input
        type="text"
        value={value}
        placeholder="Search from USER ID..."
        onChange={onChange}
        id={'user-id'}
        className="id-input"
      />
    </div>
  );
};
