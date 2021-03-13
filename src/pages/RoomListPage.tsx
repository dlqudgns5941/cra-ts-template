import React from 'react';
import Room from '@components/Room';

const RoomListPage = () => {
  const roomList = [
    {
      id: '1',
      avatarUrl: '',
      displayName: '장만월 사장님',
      lastChatMessage: '어딘데 출근 안하니, 죽고싶니?',
      lastUpdatedAt: 1615654120484,
      unreadCount: 1,
    },
    {
      id: '2',
      avatarUrl: '',
      displayName: '신정근 바텐더',
      lastChatMessage: '오시는 길에 와인 몇병만 사다주세요.',
      lastUpdatedAt: 1615650316,
      unreadCount: 0,
    },
    {
      id: '3',
      avatarUrl: '',
      displayName: '이미라 의사',
      lastChatMessage: '휴가 잘 보내고 계신가요? 다름이 아니라 지 가나다라마바',
      lastUpdatedAt: 16156503168,
      unreadCount: 3,
    },
    {
      id: '4',
      avatarUrl: '',
      displayName: '구찬성 지배인',
      lastChatMessage: '아 휴가셨군요. 약속은 다음으로 미루시죠!',
      lastUpdatedAt: 161565031683,
      unreadCount: 4,
    },
  ];
  return (
    <>
      {roomList.map((room) => (
        <Room key={room.id} {...room} />
      ))}
    </>
  );
};

export default RoomListPage;
