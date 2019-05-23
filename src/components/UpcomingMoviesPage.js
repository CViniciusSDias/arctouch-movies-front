import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import PageHeader from './PageHeader';
import { withStyles } from '@material-ui/core/styles';
import MovieList from './MovieList';

const styles = theme => ({
    mt5: {
        marginTop: theme.spacing.unit * 5
    }
});

function UpcomingMoviesPage(props) {
    const { classes, movieList, startDate, endDate } = props;

    return (
        <div>
            <PageHeader />

            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Upcoming Movies
            </Typography>

            <Typography variant="h5" gutterBottom>
                <b>From:</b> {startDate}
                &nbsp;
                <b>To:</b> {endDate}
            </Typography>

            <div className={classes.mt5}>
                {movieList.length
                    ? <MovieList movieList={movieList} />
                    : <CircularProgress className={classes.mt5} />}
            </div>
        </div>
    );
}

export default withStyles(styles)(UpcomingMoviesPage);
