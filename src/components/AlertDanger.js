import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
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
    },
});

function AlertDanger(props) {
    const { classes, message } = props;

    if (message.length === 0) {
        return null;
    }

    return (
        <div className={classes.alertDanger}>
            <Typography className={classes.pinkColor}>
                Failed to fetch the upcoming movies.
            </Typography>
            <Typography className={classes.pinkColor}>
                Error details: <i>{message}</i>
            </Typography>
        </div>
    );
}

export default withStyles(styles)(AlertDanger);
