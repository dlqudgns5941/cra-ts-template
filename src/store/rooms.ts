import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getRoomsInfo } from '@data/index';

type Room = {
  id: string;
  avatarUrl: string;
  displayName: string;
  unreadCount: number;
  lastChatMessage: string;
  lastUpdatedAt: number;
};

type RoomsState = Array<Room>;

const initialState: RoomsState = getRoomsInfo();

const rooms = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    createRoom(state, action: PayloadAction<'test'>) {
      // state.authMode = action.payload;
    },
  },
});

export const roomsActions = {
  ...rooms.actions,
};

export default rooms;
