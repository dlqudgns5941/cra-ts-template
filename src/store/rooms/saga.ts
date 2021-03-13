import { call, put, takeLatest } from 'redux-saga/effects';
import { roomsActions } from '@store/rooms';

function* handleCreateRoom() {
  // const { loadSuccess, loadFail } = unsplashAction;
  try {
    yield 1;
    // const images = yield call(getSplashImage);
    // yield put(loadSuccess(images));
  } catch (err) {
    // yield put(loadFail(err));
  }
}

export function* watchRooms() {
  const { createRoom } = roomsActions;

  yield takeLatest(createRoom, handleCreateRoom);
}
