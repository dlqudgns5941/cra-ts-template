import React from 'react';

export interface HeaderProps {
  name: string;
  age: number;
}

const Header: React.FC<HeaderProps> = ({ name, age }) => {
  return (
    <div>
      <h1>This is header</h1>
      <span>{name}</span>
      <span>{age}</span>
    </div>
  );
};

export default Header;
