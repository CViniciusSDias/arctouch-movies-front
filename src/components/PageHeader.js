import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    appBar: {
        marginBottom: theme.spacing.unit * 5
    },
    icon: {
        marginRight: theme.spacing.unit * 2
    },
    link: {
        color: '#fff',
        textDecoration: 'none'
    }
});

function PageHeader(props) {
    const { classes } = props;

    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                <Icon className={classes.icon}>movie</Icon>
                <Typography variant="h6" color="inherit" noWrap>
                    <Link to="/" className={classes.link}>Upcoming Movies</Link>
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default withStyles(styles)(PageHeader);
