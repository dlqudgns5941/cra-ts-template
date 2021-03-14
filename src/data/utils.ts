import {
  GetRoomById,
  GetRoomChatInfo,
  MakeImageChat,
  MakeMessageChat,
} from './dataType';
import data from './database';

export const makeId = () => Math.random().toString(36).substr(2, 11);

export const getRoomChatInfo: GetRoomChatInfo = (chats) =>
  chats.reduce(
    (acc, chat) => {
      let { unreadCount, lastChatMessage, lastUpdatedAt } = acc;
      const { message, createdAt, isRead } = chat;

      // 읽지 않은 글 카운트
      if (!isRead) {
        unreadCount = unreadCount + 1;
      }

      // 더 최신에 작성한 챗인 경우
      if (createdAt > lastUpdatedAt) {
        lastUpdatedAt = createdAt;
        lastChatMessage = message;
      }

      return {
        unreadCount,
        lastChatMessage,
        lastUpdatedAt,
      };
    },
    {
      unreadCount: 0,
      lastChatMessage: '',
      lastUpdatedAt: 0,
    },
  );

export const makeMessageChat: MakeMessageChat = (message) => {
  if (!message) {
    throw new Error('Write message please...');
  }

  return {
    id: makeId(),
    type: 'text',
    message,
    isMe: true,
    isRead: false,
    imageUrl: null,
    createdAt: new Date().getTime(),
  };
};

export const makeImageChat: MakeImageChat = (imageUrl) => {
  if (!imageUrl) {
    throw new Error('Select image please...');
  }

  return {
    id: makeId(),
    type: 'image',
    message: '사진을 보냈습니다.',
    isMe: true,
    isRead: false,
    imageUrl,
    createdAt: new Date().getTime(),
  };
};

export const getRoomById: GetRoomById = (id) => {
  const room = data.rooms.find((room) => room.id === id);
  if (!room) {
    throw new Error('Not Exist roomId');
  }

  return room;
};
