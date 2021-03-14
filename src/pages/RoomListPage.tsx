import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '@components/Header';
import Room from '@components/Room';
import { useDispatch } from 'react-redux';
import { useSelector } from '@store/index';
import { commonActions } from '@store/common';
import { ReactComponent as MenuIcon } from '@assets/icons/menu.svg';
import { ReactComponent as UserIcon } from '@assets/icons/user.svg';

const Container = styled.div`
  ${Header} {
    margin-bottom: 0.625rem;
  }
`;

const RoomListPage = () => {
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
    <Container>
      <Header>
        <MenuIcon />
        <div className="page-title">채팅</div>
        <UserIcon />
      </Header>
      {roomList.map((room) => (
        <Room key={room.id} {...room} />
      ))}
    </Container>
  );
};

export default RoomListPage;
