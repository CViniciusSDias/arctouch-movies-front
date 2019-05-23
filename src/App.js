import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './App.css';
import Icon from "@material-ui/core/Icon";
import { withStyles } from "@material-ui/core/styles";
import MovieList from "./components/MovieList";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = theme => ({
  icon: {
    marginRight: theme.spacing.unit * 2
  },
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
          <AppBar position="static">
            <Toolbar>
              <Icon className={classes.icon}>movie</Icon>
              <Typography variant="h6" color="inherit" noWrap>
                Upcoming Movies
              </Typography>
            </Toolbar>
          </AppBar>

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
