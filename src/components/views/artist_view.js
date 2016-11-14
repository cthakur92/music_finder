import React from 'react';
import {Button} from 'react-bootstrap';
import Header from '../../components/Layout/header';
import Playlist from '../../components/ui/playlist'
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {ListGroup} from 'react-bootstrap';
import {ListGroupItem} from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import {Media} from 'react-bootstrap';
import AppUtil from '../../components/ui/util';
import '../../style/artist.scss';

function Artist({ id, artist_data, artist_albums, fetchArtistData, fetchArtistAlbums }) {
  let util = AppUtil();
  if(!artist_data.id){
    fetchArtistData(id);
    return (
      <div id="page__artist">
        <Header />
        <Grid>
          <Row>
            Loading....
          </Row>
        </Grid>
      </div>
    )
  }else{
    var user_playlists = (
        <Row>
          <Col  xs={12} ></Col>
        </Row>
      );
    if(artist_data.playlist_count){
      if(artist_albums && artist_albums.length && artist_albums[0].user_id == artist_data.id){
        user_playlists = (
          <Row>
            <Col xs={12}>
            {
              artist_albums.map((playlist, key) => {
                return <Playlist playlist={playlist} key={"playlist_"+key}/>;
              })
            }
            </Col>
          </Row>
        );
      }else{
        fetchArtistAlbums(id);
        user_playlists = (
            <Row>
              <Col  xs={12} >Loading playlists...</Col>
            </Row>
          );
      }
    }
    artist_data.full_name = artist_data.full_name?artist_data.full_name:artist_data.username;
    return (
      <div id="page__artist">
        <Header />
        <Grid>
          <Row className="artist-profile">
            <Col  sm={4} className="text-center" >
              {artist_data.avatar_url?<Image src={artist_data.avatar_url} rounded />:<Image src={require('../../images/default_avatar_large.png')} rounded />}
            </Col>
            <Col  sm={8} >
              <Media.Heading>{artist_data.full_name}{(util.getLocation(artist_data).length)?<small>{util.getLocation(artist_data)}</small>:""}</Media.Heading>
              <p>{artist_data.description}</p>
              <p className="summary">
                {(util.getLocation(artist_data).length)?<span><strong>Location</strong>: {util.getLocation(artist_data)}</span>:""}
                {(artist_data.website)?<span><strong>Website</strong>: <a href={artist_data.website}>{artist_data.website_name?artist_data.website_name:"Website"}</a></span>:""}
                {(artist_data.playlist_count)?<span><strong>Playlists</strong>: {artist_data.playlist_count}</span>:""}
                {(artist_data.track_count)?<span><strong>Tracks</strong>: {artist_data.track_count}</span>:""}

              </p>
            </Col>
          </Row>
          {artist_data.playlist_count?<Row><h2>Playlists</h2></Row>:""}
          {user_playlists}
        </Grid>
      </div>
    );
  }
}
export default Artist;
