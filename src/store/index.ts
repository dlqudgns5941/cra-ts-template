import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from 'react-redux';

import common from '@store/common';
import user from '@store/user';
import auth from '@store/auth';
import registerRoom from '@store/registerRoom';
import chat from '@store/chat';
import rooms from '@store/rooms';

const rootReducer = combineReducers({
  common: common.reducer,
  user: user.reducer,
  auth: auth.reducer,
  registerRoom: registerRoom.reducer,
  chat: chat.reducer,
  rooms: rooms.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export default configureStore({
  reducer: rootReducer,
  devTools: true,
});
