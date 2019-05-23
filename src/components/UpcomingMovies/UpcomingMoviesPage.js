import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PageHeader from './PageHeader';
import { withStyles } from '@material-ui/core/styles';
import MovieList from './MovieList';
import UpcomingMoviesDates from "./UpcomingMoviesDates";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
    mt5: {
        marginTop: theme.spacing.unit * 5
    },
    alertDanger: {
        backgroundColor: '#f8d7da',
        border: '1px solid #f8d7da',
        borderRadius: 4,
        maxWidth: 500,
        margin: '0 auto',
        padding: theme.spacing.unit * 2
    },
    pinkColor: {
        color: '#721c24',
    }
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
        fetch('http://localhost:8080/movies/upcoming')
            .then(res => {
                if (!res.ok) throw res;
                return res.json();
            })
            .then(response => ({
                movieList: response.movies,
                startDate: response.dates.start,
                endDate: response.dates.end,
            }))
            .catch(res => {
                if (typeof res.json === 'function') {
                    return res.json();
                }

                return {
                    status_message: res.message
                };
            })
            .then(state => this.setState(state));
    }

    render() {
        const { classes } = this.props;
        const { movieList, startDate, endDate, status_message } = this.state;

        return (
            <div style={{textAlign: 'center'}}>
                <PageHeader/>

                {status_message.length
                    ? <div className={classes.alertDanger}>
                        <Typography className={classes.pinkColor}>
                            Failed to fetch the upcoming movies.
                        </Typography>
                        <Typography className={classes.pinkColor}>
                            Error details: <i>{status_message}</i>
                        </Typography>
                    </div>
                    : null}

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
