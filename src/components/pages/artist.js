import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Artist from '../views/artist_view';

function mapStateToProps(state, props) {
  let id = props.params.id;
  let artist_data;
  if(state.search.artist_data){
    if(state.search.artist_data.id == id){
      artist_data = state.search.artist_data;
    }
  }
  if(!artist_data){
    if(state.search.artists && state.search.artists.length){
        artist_data = state.search.artists.filter(function(item){
          return item.id == id;
        });
        if(artist_data.length){
          artist_data = artist_data[0];
        }
    }
  }
  if(!artist_data){
    artist_data = {};
  }
  const { artist_albums } = state.search;
  return {
    id,
    artist_data,
    artist_albums
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchArtistData: bindActionCreators(actions.fetchArtistData, dispatch),
    fetchArtistAlbums: bindActionCreators(actions.fetchArtistAlbums, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Artist);
