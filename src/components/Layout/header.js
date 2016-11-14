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


function Header(props) {
  return (
    <div>
      <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Music finder</a>
            </Navbar.Brand>
          </Navbar.Header>
      </Navbar>
    </div>
  );
}

function mapStateToProps(state, props) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
