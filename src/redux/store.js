import { applyMiddleware, createStore, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";
import { composeWithDevTools } from "redux-devtools-extension";
import { ACCESS_TOKEN, SERVER_URL } from "react-native-dotenv";

import playlistReducer from "./reducers/playlistReducer";
import playlistsReducer from "./reducers/playlistsReducer";
import rootSaga from "./saga";

const rootReducer = combineReducers({
  playlist: playlistReducer,
  playlists: playlistsReducer,
});
const middleware = [];
const enhancers = [];

const middlewareConfig = {
  interceptors: {
    request: [
      function ({ getState, dispatch, getSourceAction }, req) {
        req.headers["Authorization"] = "Bearer " + ACCESS_TOKEN;
        return req;
      },
    ],
  },
};

const client = axios.create({
  baseURL: SERVER_URL,
  responseType: "json",
});

const sagaMiddleware = createSagaMiddleware();

middleware.push(axiosMiddleware(client, middlewareConfig));
middleware.push(sagaMiddleware);
enhancers.push(applyMiddleware(...middleware));

const store = createStore(rootReducer, composeWithDevTools(...enhancers));

sagaMiddleware.run(rootSaga);

export default store;
