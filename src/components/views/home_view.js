import React from 'react';
import {Button} from 'react-bootstrap';
import Header from '../Layout/header';
import SearchDropdown from '../ui/search_dropdown';
import ArtistItem from '../ui/item_artist';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {ListGroup} from 'react-bootstrap';
import {ListGroupItem} from 'react-bootstrap';
import {FormGroup} from 'react-bootstrap';
import {InputGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Breadcrumb} from 'react-bootstrap';
import { Link } from 'react-router';

function Home({fetchArtists,fetchArtistDropdown,artists=[], artists_dropdown=[], setBreadcrumb }) {
  if(!artists || !artists.length){
    artists = [];
  }
  var artist_list = "";
  if(artists.length){
    artist_list =(
      artists.map((artist, key) => {
            return <ListGroupItem  key={artist.id}><ArtistItem className="track" artist={artist} /></ListGroupItem>;
          })
        );
  }
  return (
    <div id="page__home">
      <Header />
      <Grid>
        <Row>
          <Col xs={8} xsOffset={2}>
            <SearchDropdown dropdown_values={artists_dropdown} onChange={fetchArtistDropdown} onSearch={fetchArtists} />
          </Col>
        </Row>
        <Row>
          <ListGroup>
            {artist_list}
          </ListGroup>
        </Row>
      </Grid>
    </div>
  );
}

export default Home;
