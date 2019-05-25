import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import InputBase from "@material-ui/core/InputBase";
import { withStyles } from '@material-ui/core/styles';
import { fade } from "@material-ui/core/styles/colorManipulator";
import { Link } from 'react-router-dom';
import IconButton from "@material-ui/core/IconButton";

const styles = theme => ({
    appBar: {
        marginBottom: theme.spacing.unit * 5
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
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
    },
    inputRoot: {
        color: 'inherit',
        width: '80%'
    },
    inputInput: {
        paddingRight: theme.spacing.unit,
        paddingLeft: theme.spacing.unit,
        transition: theme.transitions.create('width'),
        width: '20%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    iconButton: {
        color: 'white'
    },
});

function PageHeader(props) {
    const { classes } = props;
    const [movieQuery, setMovieQuery] = useState('');

    const handleChangeMovieQuery = event => {
        setMovieQuery(event.target.value);
    };

    const dispatchSearchEvent = query => {
        if (!window.location.hash.includes('/search')) {
            return;
        }

        let ev = new CustomEvent('search', { detail: query });
        document.dispatchEvent(ev);
    };

    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                <Icon className={classes.icon} edge="start">movie</Icon>
                <Typography variant="h6" color="inherit" noWrap>
                    <Link to="/" className={classes.link}>Upcoming Movies</Link>
                </Typography>

                <div className={classes.grow} />

                <div className={classes.search}>
                    <InputBase
                        placeholder="Search movies…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        onChange={handleChangeMovieQuery}
                    />

                    <IconButton component={Link}
                                onClick={() => dispatchSearchEvent(movieQuery)}
                                disabled={movieQuery.length === 0}
                                to={`/search/${movieQuery}`}
                                className={classes.iconButton} aria-label="Search">
                        <Icon>search</Icon>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default withStyles(styles)(PageHeader);
