import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PageHeader from '../PageHeader';
import MovieList from '../MovieList';
import AlertDanger from '../AlertDanger';
import { withStyles } from '@material-ui/core/styles';
import UpcomingMoviesDates from './UpcomingMoviesDates';
import { ApiService } from '../../service/ApiService';

const styles = theme => ({
    mt5: {
        marginTop: theme.spacing.unit * 5
    },
});

class UpcomingMoviesPage extends Component {
    constructor(props) {
        super(props);

        this.props = props;
        this.state = {
            movieList: [],
            startDate: null,
            endDate: null,
            status_message: ''
        };
    }

    componentWillMount() {
        ApiService.fetchFromApi('/movies/upcoming', response => ({
            movieList: response.movies,
            startDate: response.dates.start,
            endDate: response.dates.end,
        })).then(state => this.setState(state));
    }

    render() {
        const { classes } = this.props;
        const { movieList, startDate, endDate, status_message } = this.state;

        return (
            <div style={{textAlign: 'center'}}>
                <PageHeader/>

                <AlertDanger message={status_message} />

                <div hidden={status_message.length > 0 || movieList.length > 0}>
                    <CircularProgress className={classes.mt5} />
                </div>

                <div hidden={movieList.length === 0}>
                    <UpcomingMoviesDates startDate={startDate} endDate={endDate} />
                    <MovieList movieList={movieList} className={classes.mt5} />
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(UpcomingMoviesPage);
