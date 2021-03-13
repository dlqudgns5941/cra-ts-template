import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
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

import { watchChat } from '@store/chat/saga';
import { watchRooms } from '@store/rooms/saga';

const sagaMiddleware = createSagaMiddleware();
function* rootSaga() {
  yield all([watchChat(), watchRooms()]);
}

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

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: [sagaMiddleware],
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export default createStore;
