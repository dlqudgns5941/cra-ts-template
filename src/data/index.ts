import {
  Chat,
  GetRoomById,
  GetRoomInfos,
  Room,
  UploadImage,
  WriteMessage,
} from './dataType';
import data from './database';
import {
  getRoomById,
  getRoomChatInfo,
  makeImageChat,
  makeMessageChat,
} from './utils';

export const getRoomInfos: GetRoomInfos = () =>
  data.rooms
    .map(({ id, avatarUrl, displayName, chats }) => ({
      id,
      avatarUrl,
      displayName,
      ...getRoomChatInfo(chats),
    }))
    .sort((a, b) => (a.lastUpdatedAt < b.lastUpdatedAt ? 1 : -1));

export const getRoomInfoById: GetRoomById = (id) => {
  const room = getRoomById(id) as Room;
  return {
    ...room,
    chats: room.chats.sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1)),
  };
};

export const writeMessage: WriteMessage = ({ roomId, message }) => {
  const room = getRoomById(roomId) as Room;
  const chat = makeMessageChat(message) as Chat;
  room.chats.push(chat);
};

export const uploadImage: UploadImage = ({ roomId, imageUrl }) => {
  const room = getRoomById(roomId) as Room;
  const chat = makeImageChat(imageUrl) as Chat;
  room.chats.push(chat);
};
