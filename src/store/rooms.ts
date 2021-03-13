import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Room = {
  id: string;
  avatarUrl: string;
  displayName: string;
  unreadCount: number;
  lastChatMessage: string;
  lastUpdatedAt: number;
};

type RoomsState = Array<Room>;

const initialState: RoomsState = [];

const rooms = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    // setAuthMode(state, action: PayloadAction<'signup' | 'login'>) {
    //   state.authMode = action.payload;
    // },
  },
});

export const roomsActions = {
  ...rooms.actions,
};

export default rooms;
