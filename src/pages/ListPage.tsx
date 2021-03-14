import React, { useEffect } from 'react';
import Room from '@components/Room';
import { useDispatch } from 'react-redux';
import { useSelector } from '@store/index';
import { commonActions } from '@store/common';

const ListPage = () => {
  // const dispatch = useDispatch();

  const roomList = useSelector((state) => state.rooms);

  // const setValidateMode = (value: boolean) => {
  //   dispatch(commonActions.setValidateMode(value));
  // };

  useEffect(() => {
    // console.log('[AccountPage] isLogged: ', isLogged);
    // setValidateMode(true);
  }, []);

  return (
    <>
      {roomList.map((room) => (
        <Room key={room.id} {...room} />
      ))}
    </>
  );
};

export default ListPage;
