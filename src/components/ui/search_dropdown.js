import React from 'react';
import {Button} from 'react-bootstrap';
import {ListGroup} from 'react-bootstrap';
import {ListGroupItem} from 'react-bootstrap';
import {FormGroup} from 'react-bootstrap';
import {InputGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import {Media} from 'react-bootstrap';
import { Link } from 'react-router';
import { ItemArtist } from './item_artist';
import AppUtil from './util';
import '../../style/search_dropdown.scss';


function SearchDropdown({dropdown_values=[], onChange, onSearch}) {
  let clsOpen = (dropdown_values && dropdown_values.length) ? "open" : "";
  let util = AppUtil();
  function DropdownItem({item}){
    item.full_name = item.full_name? item.full_name:item.username;
    return (
      <ListGroupItem>
        <Media>
         <Media.Left>
            <Image rounded src={item.avatar_url} alt="Image"/>
          </Media.Left>
          <Media.Body>
            <p><Link to={`/user/${item.id}`}>{item.full_name}</Link>
            <small>{util.getLocation(item)}</small></p>
            <p className="summary">
            {(item.track_count)?<span><small>Track Count:</small> {item.track_count}</span>:""}
            {(item.playlist_count)?<span><small>Playlist Count:</small> {item.playlist_count}</span>:""}
            </p>
          </Media.Body>
        </Media>
      </ListGroupItem>
    );
  }
  return (
    <FormGroup className={clsOpen + " search-dropdown"}>
      <InputGroup>
        <FormControl type="text" onChange={onChange} />
        <InputGroup.Button>
          <Button bsStyle="primary" onClick={onSearch}>Search</Button>
        </InputGroup.Button>
      </InputGroup>
      <div className="dropdown-container">
        <ListGroup >
          {
            dropdown_values.map((item, key) => {
              return <DropdownItem item={item}   key={"drop_item_"+item.id} />;
            })
          }
        </ListGroup>
      </div>
    </FormGroup>
  );
}

export default SearchDropdown;
