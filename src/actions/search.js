import SC from 'soundcloud';
import * as actionTypes from '../constants/actionTypes';

function fetchArtists(q) {
  if(typeof(q) != 'string'){
    q="";
  }
  return function (dispatch) {
    dispatch(setArtistDropdown([]));
    SC.get('/users',{q:q,limit:20,offset:0}).then(function(data){
        dispatch(setArtists(data));
    });
  }
}

function setArtists(artists) {
  return {
    type: actionTypes.ARTIST_SET,
    artists
  };
}

function fetchArtistDropdown(q) {
  if(q && typeof(q) == 'object'){
    if(q.type == "change"){
      q = q.target.value;
    }else if (q.type == "blur") {
      q = "";
    }
  }
  return function (dispatch) {
    if((typeof(q) != 'string') || (q == "")){
      dispatch(setArtistDropdown([]));
    }else{
      let request_key = window.setTimeout(function(){
        SC.get('/users',{q:q,limit:5,offset:0}).then(function(data){
            dispatch(setArtistDropdown(data));
        });
      },500);
      dispatch(setRequestKey({key:"fetchArtistDropdown", value: request_key}));
    }
  }
}

function setArtistDropdown(artists_dropdown) {
  return {
    type: actionTypes.ARTISTDROPDOWN_SET,
    artists_dropdown
  };
}
function setRequestKey(request_key) {
  return {
    type: actionTypes.REQUESTKEY_SET,
    request_key
  };
}

function fetchArtistData(id) {
  return function (dispatch) {
    SC.get('/users/'+id).then(function(data){
        let artist_data = data
        dispatch(setArtistData(artist_data));
    });
  }
}

function setArtistData(artist_data) {
  return {
    type: actionTypes.ARTISTDATA_SET,
    artist_data
  };
}

function fetchArtistAlbums(id) {
  return function (dispatch) {
    SC.get('/users/'+id+"/playlists").then(function(data){
        let artist_albums = data
        dispatch(setArtistAlbums(artist_albums));
    });
  }
}

function setArtistAlbums(artist_albums) {
  return {
    type: actionTypes.ARTISTALBUM_SET,
    artist_albums
  };
}
export {
  fetchArtists, fetchArtistDropdown, fetchArtistData, fetchArtistAlbums
};
