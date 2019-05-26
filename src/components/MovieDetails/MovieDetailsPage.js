import React, { Component } from 'react';
import PageHeader from '../PageHeader';
import CircularProgress from '@material-ui/core/CircularProgress';
import AlertDanger from '../AlertDanger';
import MovieDetails from './MovieDetails';
import { withStyles } from '@material-ui/core/styles';
import { ApiService } from '../../service/ApiService';

const styles = theme => ({
    mt5: {
        marginTop: theme.spacing.unit * 5
    }
});

class MovieDetailsPage extends Component {
    #id;

    constructor(props) {
        super(props);
        this.state = {
            movieDetails: {},
            status_message: ''
        };
        this.#id = this.props.match.params.id;

    }

    componentWillMount() {
        ApiService
            .fetchFromApi(`/movies/${this.#id}`, movieDetails => ({movieDetails}))
            .then(state => this.setState(state));
    }

    render() {
        const { classes } = this.props;
        const { status_message, movieDetails } = this.state;
        const movieLoaded = Object.entries(movieDetails).length > 0;

        return (
            <div style={{textAlign: 'center'}}>
                <PageHeader />

                <div hidden={status_message.length > 0 || movieLoaded}>
                    <CircularProgress className={classes.mt5} />
                </div>

                <AlertDanger message={status_message}/>

                {movieLoaded ? <MovieDetails movie={movieDetails} /> : null}
            </div>
        );
    }
}

export default withStyles(styles)(MovieDetailsPage);
