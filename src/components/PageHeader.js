import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { Link, Redirect } from 'react-router-dom';

const styles = theme => ({
    appBar: {
        marginBottom: theme.spacing.unit * 5
    },
    toolbar: {
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    icon: {
        marginRight: theme.spacing.unit * 2
    },
    grow: {
        flexGrow: 1
    },
    link: {
        color: '#fff',
        textDecoration: 'none'
    },
    search: {
        width: '20%',
        minWidth: 250,
        display: 'flex',
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
    },
    inputRoot: {
        color: 'inherit',
        flexBasis: '80%'
    },
    inputInput: {
        paddingRight: theme.spacing.unit,
        paddingLeft: theme.spacing.unit,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    iconButton: {
        color: 'white',
        flexBasis: '20%'
    },
});

class PageHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movieQuery: '',
            redirectToSearch: false
        };
    }

    handleChangeMovieQuery(event) {
        this.setState({
            movieQuery: event.target.value
        });
    }

    dispatchSearchEvent() {
        if (!this.isOnSearchPage()) {
            return;
        }

        let ev = new CustomEvent('search', {detail: this.state.movieQuery});
        document.dispatchEvent(ev);
        this.setState({
            movieQuery: ''
        })
    }

    isOnSearchPage() {
        return window.location.hash.includes('/search');
    }

    handleKeyDown(event) {
        const userPressedEnter = event.key === 'Enter';
        if (!userPressedEnter) {
            return;
        }

        if (this.isOnSearchPage()) {
            return this.dispatchSearchEvent();

        }

        if (this.state.movieQuery.length > 0) {
            this.setState({
                redirectToSearch: true
            });
        }
    }

    render() {
        const { movieQuery, redirectToSearch } = this.state;
        const searchUrl = `/search/${movieQuery}`;

        if (redirectToSearch) {
            return <Redirect to={searchUrl} />;
        }

        const { classes } = this.props;
        return (
            <AppBar position="static" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Icon className={classes.icon} edge="start">movie</Icon>
                    <Typography variant="h6" color="inherit" noWrap>
                        <Link to="/" className={classes.link}>Upcoming Movies</Link>
                    </Typography>

                    <div className={classes.grow}/>

                    <div className={classes.search}>
                        <InputBase
                            placeholder="Search movies…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            onChange={this.handleChangeMovieQuery.bind(this)}
                            onKeyPress={this.handleKeyDown.bind(this)}
                            value={movieQuery}
                        />

                        <IconButton component={Link}
                                    onClick={() => this.dispatchSearchEvent()}
                                    disabled={movieQuery.length === 0}
                                    to={searchUrl}
                                    className={classes.iconButton} aria-label="Search">
                            <Icon>search</Icon>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles)(PageHeader);
