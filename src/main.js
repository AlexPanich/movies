import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRedirect, Redirect, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './containers/App.jsx';
import Search from './containers/Search.jsx';
import Movie from './containers/Movie.jsx';
import About from './containers/About.jsx';
import MovieSimilar from './containers/MovieSimilar.jsx';
import MovieRecommendations from './containers/MovieRecommendations.jsx';
import Popular from './containers/Popular';
import Top from './containers/Top';
import Now from './containers/Now';

import store from './store';

import 'normalize.css';
import './assets/main.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const routes = (
    <Route component={App}>
        <Redirect from="/" to="movies" />
        <Route path="movies" component={Search} />
        <Route path="about" component={About} />
        <Route path="popular" component={Popular} />
        <Route path="top" component={Top} />
        <Route path="now" component={Now} />
        <Route path="movies/:id" component={Movie}>
            <IndexRedirect to="recommendations" />
            <Route path="recommendations" component={MovieRecommendations} />
            <Route path="similar" component={MovieSimilar} />
        </Route>
    </Route>
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('root')
);
