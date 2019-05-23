import React from 'react';
import Typography from '@material-ui/core/Typography';

function UpcomingMoviesDates(props) {
    const { startDate, endDate } = props;

    return (
        <div>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Upcoming Movies
            </Typography>

            <Typography variant="h5" gutterBottom>
                <b>From:</b> {startDate}
                &nbsp;
                <b>To:</b> {endDate}
            </Typography>

        </div>
    );
}

export default UpcomingMoviesDates;
