import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ImageMessage = {
  type: 'image';
  imageUrl: string;
};

type ChatMessage = {
  type: 'text';
  message: string;
};

type Chat = {
  id: string;
  message: string;
  type: 'image' | 'text';
  imageUrl?: string;
  createdAt: number;
  isMe: boolean;
  isRead: boolean;
};

type ChatState = Array<Chat>;

const initialState: ChatState = [];

const chat = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    createMessage(state, action: PayloadAction<ChatMessage | ImageMessage>) {
      // state.authMode = action.payload;
    },
  },
});

export const chatActions = {
  ...chat.actions,
};

export default chat;
