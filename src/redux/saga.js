import { fork, takeEvery, put } from "redux-saga/effects";

import { updatePlaylists } from "./reducers/playlistsReducer";
import { updatePlaylistInfo } from "./reducers/playlistReducer";

function* updateList() {
  yield put(updatePlaylists());
}

function* fetchPlaylists() {
  yield takeEvery("FETCH_LIST", updateList);
}

function* updateInfo(action) {
  yield put(updatePlaylistInfo(action.payload));
}

function* fetchPlaylistInfo() {
  yield takeEvery("FETCH_PLAYLIST_INFO", updateInfo);
}

export default function* rootSaga() {
  yield fork(fetchPlaylists);
  yield fork(fetchPlaylistInfo);
}
