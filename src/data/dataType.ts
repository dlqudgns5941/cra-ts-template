export interface Chat {
  id: string;
  type: 'text' | 'image';
  message: string;
  imageUrl: string | null;
  isMe: boolean;
  isRead: boolean;
  createdAt: number;
}

export interface Room {
  id: string;
  avatarUrl: string;
  displayName: string;
  chats: Array<Chat>;
}

export interface Data {
  rooms: Array<Room>;
}

export type GetRoomChatInfo = (
  chats: Array<Chat>,
) => {
  unreadCount: number;
  lastChatMessage: string;
  lastUpdatedAt: number;
};

export type GetRoomInfos = () => Array<{
  id: string;
  avatarUrl: string;
  displayName: string;
  unreadCount: number;
  lastChatMessage: string;
  lastUpdatedAt: number;
}>;

export type GetRoomById = (id: string) => Room | Error;

export type MakeMessageChat = (message: string) => Chat | Error;

export type MakeImageChat = (imageUrl: string) => Chat | Error;

export type WriteMessage = (data: {
  roomId: string;
  message: string;
}) => void | Error;

export type UploadImage = (data: {
  roomId: string;
  imageUrl: string;
}) => void | Error;