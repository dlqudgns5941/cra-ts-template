import React from 'react';

const Header = () => {
  const [value, setValue] = React.useState(0);

  const onClickHandler = () => {
    setValue(value + 1);
  };
  return (
    <div>
      <span>{value}</span>
      <button onClick={onClickHandler}>add value</button>
    </div>
  );
};

export default Header;
