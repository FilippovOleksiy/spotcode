const initState = {
  playlist: {},
  id: -1,
};

const UPDATE_PLAYLIST_ID = "UPDATE_PLAYLIST_ID";
const UPDATE_PLAYLIST_INFO_SUCCESS = "UPDATE_PLAYLIST_INFO_SUCCESS";
const UPDATE_PLAYLIST_INFO_FAIL = "UPDATE_PLAYLIST_INFO_FAIL";
const UPDATE_PLAYLIST_INFO = "UPDATE_PLAYLIST_INFO";
const FETCH_PLAYLIST_INFO = "FETCH_PLAYLIST_INFO";

function playlistReducer(state = initState, action) {
  switch (action.type) {
    case UPDATE_PLAYLIST_ID:
      return {
        ...state,
        id: action.payload,
        playlist: {},
      };
    case UPDATE_PLAYLIST_INFO_SUCCESS:
      const {
        payload: { data },
      } = action;
      return {
        ...state,
        playlist: Object.assign(data, {}),
      };
    case UPDATE_PLAYLIST_INFO_FAIL:
      return {
        ...state,
        playlist: {},
      };
    default:
      return state;
  }
}

export const updatePlaylistInfo = (id) => ({
  type: UPDATE_PLAYLIST_INFO,
  payload: {
    request: {
      url: `/v1/playlists/${id}`,
      method: "get",
    },
  },
});

export const fetchPlaylistInfo = (id) => ({
  type: FETCH_PLAYLIST_INFO,
  payload: id,
});

export const updatePlaylistId = (id) => ({
  type: UPDATE_PLAYLIST_ID,
  payload: id,
});

export default playlistReducer;
