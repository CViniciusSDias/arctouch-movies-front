import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core//Typography';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    movieCard: {
        marginBottom: theme.spacing.unit
    },
    imageContainer: {
        minHeight: 450
    },
    divMovieName: {
        minHeight: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bold: {
        fontWeight: 'bold'
    },
    tableText: {
        width: 160
    },
    link: {
        color: 'inherit',
        textDecoration: 'none'
    }
});

function Movie(props) {
    const { movie, classes } = props;
    const imageSrc = movie.imagePath === null
        ? 'https://via.placeholder.com/300x450'
        : `https://image.tmdb.org/t/p/w300/${movie.imagePath}`;

    return (
        <Card className={classes.movieCard}>
            <div className={classes.imageContainer}>
                <CardMedia
                    image={imageSrc}
                    component="img"
                    title={movie.name} />
            </div>

            <CardContent>
                <div className={classes.divMovieName}>
                    <Typography variant="subheading" className={classes.bold}>
                        {movie.name}
                    </Typography>
                </div>

                <Divider/>

                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell padding="none" className={classes.bold}>
                                Genres:
                            </TableCell>
                            <TableCell padding="none" className={classes.tableText}>
                                {movie.genres.join(', ')}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell padding="none" className={classes.bold}>
                                Release Date:
                            </TableCell>
                            <TableCell padding="none" className={classes.tableText}>
                                {movie.releaseDate}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>

            <CardActions>
                <Button size="small">
                    <Link to={`/details/${movie.id}`} className={classes.link}>View more</Link>
                </Button>
            </CardActions>
        </Card>
    );
}

export default withStyles(styles)(Movie);
