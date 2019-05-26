import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PageHeader from '../PageHeader';
import MovieList from '../MovieList';
import AlertDanger from '../AlertDanger';
import { withStyles } from '@material-ui/core/styles';
import { ApiService } from '../../service/ApiService';

const styles = theme => ({
    mt5: {
        marginTop: theme.spacing.unit * 5
    },
});

class SearchMoviesPage extends Component {
    constructor(props) {
        super(props);

        this.props = props;
        this.state = {
            movieList: [],
            status_message: ''
        };
    }

    searchListener(e) {
        this.setState({
            movieList: []
        });

        this.loadMovies(e.detail);
    }

    componentDidMount() {
        const { query } = this.props.match.params;
        this.loadMovies(query);

        document.addEventListener('search', this.searchListener.bind(this));
    }

    componentWillUnmount() {
        document.removeEventListener('search', this.searchListener.bind(this));
    }

    loadMovies(query) {
        ApiService.fetchFromApi(`/movies/query?q=${query}`, response => ({
            movieList: response.movies
        })).then(state => this.setState(state));
    }

    render() {
        const { classes } = this.props;
        const { movieList, status_message } = this.state;

        return (
            <div style={{textAlign: 'center'}}>
                <PageHeader/>

                <AlertDanger message={status_message} />

                <div hidden={status_message.length > 0 || movieList.length > 0}>
                    <CircularProgress className={classes.mt5} />
                </div>

                <div hidden={movieList.length === 0}>
                    <MovieList movieList={movieList} className={classes.mt5} />
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(SearchMoviesPage);
