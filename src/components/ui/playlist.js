import React from 'react';
import {Button} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {ListGroup} from 'react-bootstrap';
import {ListGroupItem} from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import {Media} from 'react-bootstrap';
import '../../style/playlist.scss';
import AppUtil from './util';


function Playlist({playlist}) {
  var tracks = "";
  var util = AppUtil();
  if(playlist.tracks.length){
    tracks =
      playlist.tracks.map((track, key) => {
        return (
          <ListGroupItem key={"track_"+key}>
            <Media className="track">
              <Media.Left>
                {track.artwork_url?<Image rounded src={track.artwork_url} alt="Image"/>:<Image rounded src={require('../../images/default_avatar_large.png')} />}
              </Media.Left>
              <Media.Body>
                <p><a href={track.permalink_url} target="_blank">{track.title}</a></p>
                {(track.description)?<p  dangerouslySetInnerHTML={{__html: track.description}}></p>:""}
                <p className="summary">
                  {(track.duration)?<span><small>Duration</small>: {util.getDuration(track.duration)}</span>:""}
                  {(track.created_at)?<span><small>Created At</small>: {(new Date(track.created_at)).toLocaleDateString()}</span>:""}
                  {(track.original_content_size)?<span><small>Original Content Size</small>: {(track.original_content_size/1000000).toFixed(2)} MB</span>:""}
                </p>
              </Media.Body>
            </Media>
          </ListGroupItem>
        );
      }
    );
  }
  return (
    <Row className="playlist-container">
      <Col sm={2}>
        {playlist.artwork_url?<Image rounded src={playlist.artwork_url} alt="Image"/>:<Image rounded src={require('../../images/default_avatar_large.png')} />}
      </Col>
      <Col sm={10}>
        <ListGroup className="playlist">
          <ListGroupItem key={"playlist_title_"+playlist.id}>
            <Media.Heading><a href={playlist.permalink_url} target="_blank">{playlist.title}</a></Media.Heading>
              {(playlist.description)?<p>{playlist.description}</p>:""}
              <p className="summary">
              {(playlist.duration)?<span><small>Duration</small>: {util.getDuration(playlist.duration)}</span>:""}
              {(playlist.track_count)?<span><small>Tracks</small>: {playlist.track_count}</span>:""}
              </p>
          </ListGroupItem>
          {tracks}
        </ListGroup>
      </Col>
    </Row>
  );
}
export default Playlist;
