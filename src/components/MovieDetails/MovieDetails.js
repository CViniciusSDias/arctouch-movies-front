import React from 'react';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {withStyles} from "@material-ui/core/styles";

const styles = theme => ({
    movieCard: {
        width: '50%',
        margin: '0 auto',
        marginBottom: theme.spacing.unit * 5
    },
    tableFirstCol: {
        width: '10%',
        fontWeight: 'bold'
    }
});

function MovieDetails(props) {
    const { movie, classes } = props;
    const imageSrc = movie.imagePath === null
        ? 'https://via.placeholder.com/300x450'
        : `https://image.tmdb.org/t/p/original/${movie.imagePath}`;

    return (
        <Card className={classes.movieCard}>
            <CardHeader title={movie.name} />

            <div className={classes.imageContainer}>
                <CardMedia
                    image={imageSrc}
                    component="img"
                    title={movie.name} />
            </div>

            <CardContent>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell padding="none" className={classes.tableFirstCol}>
                                Genres:
                            </TableCell>
                            <TableCell padding="none" className={classes.tableText}>
                                {movie.genres.join(', ')}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell padding="none" className={classes.tableFirstCol}>
                                Release Date:
                            </TableCell>
                            <TableCell padding="none" className={classes.tableText}>
                                {movie.releaseDate}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell padding="none" className={classes.tableFirstCol}>
                                Overview:
                            </TableCell>
                            <TableCell padding="none" className={classes.tableText}>
                                {movie.overview}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}

export default withStyles(styles)(MovieDetails);
