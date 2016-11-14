import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Home from '../views/home_view';

function mapStateToProps(state, props) {
  const { artists } = state.search;
  const { artists_dropdown } = state.search;
  return {
    artists,
    artists_dropdown
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchArtists: bindActionCreators(actions.fetchArtists, dispatch),
    fetchArtistDropdown: bindActionCreators(actions.fetchArtistDropdown, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
