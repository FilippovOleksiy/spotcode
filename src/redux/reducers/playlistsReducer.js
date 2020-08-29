const initState = {
  list: [],
};

const FETCH_LIST = "FETCH_LIST";
const UPDATE_LIST = "UPDATE_LIST";
const UPDATE_LIST_SUCCESS = "UPDATE_LIST_SUCCESS";
const UPDATE_LIST_FAIL = "UPDATE_LIST_FAIL";

function playlistsReducer(state = initState, action) {
  switch (action.type) {
    case UPDATE_LIST_SUCCESS:
      const {
        payload: {
          data: { items },
        },
      } = action;
      return {
        ...state,
        list: [...items],
      };
    case UPDATE_LIST_FAIL:
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
}

export const updatePlaylists = () => ({
  type: UPDATE_LIST,
  payload: {
    request: {
      url: "/v1/me/playlists",
      method: "get",
    },
  },
});

export const fetchPlaylists = () => ({
  type: FETCH_LIST,
});

export default playlistsReducer;
