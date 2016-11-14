import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';


import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import {FormGroup} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';
import {Breadcrumb} from 'react-bootstrap';
import {Grid} from 'react-bootstrap';
import { Link } from 'react-router';


function DetailsToggle(props) {
  console.log("DetailsToggle");
  // console.log(props);
  let limit = props.limit?props.limit:250;
  if(props.text && props.text.length <= limit){
    return (
      <p>{props.text}</p>
    );
  }else if (props.text ) {
    return (
      <p className="details-toggle">
        <span className="text-short">{props.text.substring(0,limit)+"..."}</span>
        <span className="text-full" dangerouslySetInnerHTML={{__html: props.text}}></span>
        <span className="text-toggle" onClick={props.toggleDetails}></span>
      </p>
    );
  }else{
    return null;
  }
}

function mapStateToProps(state, props) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    toggleDetails: bindActionCreators(actions.toggleDetails, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsToggle);
