import React, { Component } from 'react';
import UpcomingMoviesPage from './components/UpcomingMoviesPage';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.props = props;
    this.state = {
      movieList: [],
      startDate: null,
      endDate: null
    };
  }

  componentWillMount() {
    fetch('http://localhost:8080/movies/upcoming')
        .then(res => res.json())
        .then(response => this.setState({
          movieList: response.movies,
          startDate: response.dates.start,
          endDate: response.dates.end,
        }));
  }

  render() {
    return (
        <div className="App">
          <UpcomingMoviesPage {...this.state} />
        </div>
    );
  }
}

export default App;
