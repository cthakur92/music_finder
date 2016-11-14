import React from 'react';
import {ListGroup} from 'react-bootstrap';
import {ListGroupItem} from 'react-bootstrap';
import {Media} from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import { Link } from 'react-router';
import '../../style/item_artist.scss';
import AppUtil from './util';

function ArtistItem(props){
  let artist = props.artist;
  let util = AppUtil();
  let show_description = show_description?show_description:false;
  if(!artist.id){
    return "";
  }
  artist.full_name = artist.full_name? artist.full_name:artist.username
  return(
    <Media className="item-artist">
     <Media.Left>
        <Image rounded width={64} height={64} src={artist.avatar_url} alt="Image"/>
      </Media.Left>
      <Media.Body>
        <p><Link to={`/user/${artist.id}`}>{artist.full_name}</Link>
        <small>  ({(artist.city)?artist.city+" /" :""}{artist.country})</small></p>
        {<p dangerouslySetInnerHTML={{__html: util.elipsize(artist.description, 500)}}></p>}
        <p className="summary">
        {(artist.track_count)?<span><small>Track Count:</small> {artist.track_count}</span>:""}
        {(artist.playlist_count)?<span><small>Playlist Count:</small> {artist.playlist_count}</span>:""}
        </p>
      </Media.Body>
    </Media>
  );

}
export default ArtistItem;
