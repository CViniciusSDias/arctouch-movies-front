import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import UpcomingMoviesPage from "./components/UpcomingMovies/UpcomingMoviesPage";
import './index.css';
import MovieDetailsPage from "./components/MovieDetails/MovieDetailsPage";
import SearchMoviesPage from "./components/SearchMoviesPage/SearchMoviesPage";

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/" exact={true} component={UpcomingMoviesPage} />
            <Route path="/details/:id" exact={true} component={MovieDetailsPage} />
            <Route path="/search/:query" exact={true} component={SearchMoviesPage} />
        </Switch>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
