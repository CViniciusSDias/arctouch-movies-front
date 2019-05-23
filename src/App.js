import React, { Component } from 'react';
import UpcomingMoviesPage from './components/UpcomingMoviesPage';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <UpcomingMoviesPage {...this.state} />
        </div>
    );
  }
}

export default App;
