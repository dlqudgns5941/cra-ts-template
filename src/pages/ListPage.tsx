import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '@components/Header';
import Room from '@components/Room';
import { useDispatch } from 'react-redux';
import { useSelector } from '@store/index';
import { commonActions } from '@store/common';
import { ReactComponent as Menu } from '@assets/icons/menu.svg';
import { ReactComponent as User } from '@assets/icons/user.svg';

const Container = styled.div`
  ${Header} {
    justify-content: space-between;
    margin-bottom: 0.625rem;
    .page-title {
      color: #fff;
      font-size: 1.063rem;
      font-weight: bold;
      letter-spacing: -0.12px;
    }
  }
`;

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
    <Container>
      <Header>
        <Menu />
        <div className="page-title">채팅</div>
        <User />
      </Header>
      {roomList.map((room) => (
        <Room key={room.id} {...room} />
      ))}
    </Container>
  );
};

export default ListPage;
