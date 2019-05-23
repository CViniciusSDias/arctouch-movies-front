import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './App.css';
import Icon from "@material-ui/core/Icon";
import { withStyles } from "@material-ui/core/styles";
import Movie from "./components/Movie";

const styles = theme => ({
  icon: {
    marginRight: theme.spacing.unit * 2
  },
  gridContainer: {
    maxWidth: '1024px',
    margin: '0 auto'
  },
  movie: {
    maxWidth: 300
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

          <Grid container spacing={8} className={classes.gridContainer}>
            {this.state.movieList.map((movie, i) => (
                <Grid item xs={6} md={4} key={i}>
                  <div className={classes.movie}>
                    <Movie movie={movie} />
                  </div>
                </Grid>
            ))}
          </Grid>
        </div>
    );
  }
}

export default withStyles(styles)(App);
