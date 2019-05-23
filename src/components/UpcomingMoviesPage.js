import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PageHeader from './PageHeader';
import { withStyles } from '@material-ui/core/styles';
import MovieList from './MovieList';
import UpcomingMoviesDates from "./UpcomingMoviesDates";

const styles = theme => ({
    mt5: {
        marginTop: theme.spacing.unit * 5
    }
});

class UpcomingMoviesPage extends Component {
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
        const { classes } = this.props;
        const { movieList, startDate, endDate } = this.state;

        return (
            <div style={{textAlign: 'center'}}>
                <PageHeader/>

                {movieList.length === 0
                    ? <CircularProgress className={classes.mt5}/>
                    : <div>
                        <UpcomingMoviesDates startDate={startDate} endDate={endDate} />
                        <MovieList movieList={movieList} className={classes.mt5} />
                    </div>
                }
            </div>
        );
    }
}

export default withStyles(styles)(UpcomingMoviesPage);
