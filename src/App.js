import React, { Component } from 'react';
import './App.css';
import { withStyles } from "@material-ui/core/styles";
import MovieList from "./components/MovieList";
import CircularProgress from "@material-ui/core/CircularProgress";
import PageHeader from "./components/PageHeader";

const styles = theme => ({
  mt5: {
    marginTop: theme.spacing.unit * 5
  }
});

class App extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      movieList: []
    };
  }

  componentWillMount() {
    fetch('http://localhost:8080/movies/upcoming')
        .then(res => res.json())
        .then(movieList => this.setState({movieList}));
  }

  render() {
    const {classes} = this.props;

    return (
        <div className="App">
          <PageHeader />

          <div className={classes.mt5}>
              {this.state.movieList.length
                  ? <MovieList movieList={this.state.movieList} />
                  : <CircularProgress className={classes.mt5} />}
          </div>
        </div>
    );
  }
}

export default withStyles(styles)(App);
