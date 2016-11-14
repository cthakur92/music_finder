import * as actionTypes from '../constants/actionTypes';

const initialState = {
  artists: [],
  artists_dropdown: [],
  artist_data: {},
  artist_albums: [],
  request_keys: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ARTIST_SET:
      return setArtists(state, action);
    case actionTypes.ARTISTDROPDOWN_SET:
      return setArtistDropdown(state, action);
    case actionTypes.ARTISTDATA_SET:
      return setArtistData(state, action);
    case actionTypes.ARTISTALBUM_SET:
      return setArtistAlbums(state, action);
    case actionTypes.REQUESTKEY_SET:
      return setRequestKey(state, action);
  }
  return state;
}

function setArtists(state, action) {
  return Object.assign({}, state, { artists: action.artists });
}

function setArtistDropdown(state, action) {
  return Object.assign({}, state, { artists_dropdown: action.artists_dropdown });
}
function setRequestKey(state, action){
  let request_keys = state.request_keys?state.request_keys:{};
  let objAction = action.request_key;
  if(request_keys[objAction.key]){
    window.clearTimeout(request_keys[objAction.key]);
  }
  request_keys[objAction.key] = objAction.value;
  return Object.assign({}, state, { request_keys: request_keys });
}
function setArtistData(state, action) {
  return Object.assign({}, state, { artist_data: action.artist_data });
}
function setArtistAlbums(state, action) {
  return Object.assign({}, state, { artist_albums: action.artist_albums });
}
export {}
