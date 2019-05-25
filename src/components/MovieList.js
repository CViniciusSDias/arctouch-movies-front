import React from 'react';
import Grid from '@material-ui/core/Grid';
import Movie from './Movie';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
    gridContainer: {
        maxWidth: '1024px',
        margin: '0 auto'
    },
    movie: {
        maxWidth: 300
    }
});

function MovieList(props) {
    const { classes, movieList } = props;

    return (
        <Grid container spacing={8} className={classes.gridContainer}>
            {movieList.map((movie, i) => (
                <Grid item xs={6} md={4} key={i}>
                    <div className={classes.movie}>
                        <Movie movie={movie} />
                    </div>
                </Grid>
            ))}
        </Grid>
    );
}

export default withStyles(styles)(MovieList);
