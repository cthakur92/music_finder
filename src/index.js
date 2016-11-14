import SC from 'soundcloud';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import App from './components/App';
import Callback from './components/Callback';
import HomePage from './components/pages/home';
import ArtistPage from './components/pages/artist';
import { CLIENT_ID, REDIRECT_URI } from './constants/auth';

SC.initialize({ client_id: CLIENT_ID, redirect_uri: REDIRECT_URI });

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="/user/:id" component={ArtistPage}/>
        <Route path="/callback" component={Callback} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
