import { call, put, takeLatest } from 'redux-saga/effects';
import { chatActions } from '@store/chat';

function* handleCreateImage() {
  // const { loadSuccess, loadFail } = unsplashAction;
  try {
    yield 1;
    // const images = yield call(getSplashImage);
    // yield put(loadSuccess(images));
  } catch (err) {
    // yield put(loadFail(err));
  }
}

export function* watchChat() {
  const { createMessage } = chatActions;

  yield takeLatest(createMessage, handleCreateImage);
}
