import React, { useEffect } from 'react';
import {
  Avatar,
  Box,
  Container,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography
} from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetailsRequest } from '../../store/movieDetails/actions';
import { getLoader, getMovieDetails } from '../../store/movieDetails/selectors';
import { Loader } from '../Loader';
import { MovieDetails } from '../../store/movieDetails/types';
import { Rate } from '../Rate';
import { getRatingErrorMessage, getRatingLoader } from '../../store/ratedMovies/selectors';
import { Alert } from '@material-ui/lab';
import { ListItem } from './ListItem';

interface ParamsData {
    id: string;
}

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  },
  title: {
    textAlign: 'center',
    marginTop: '2rem'
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: '1rem',
    '& > img': {
      objectFit: 'contain'
    }
  },
  imageBox: {
    width: '35%',
    minWidth: '20rem',
    maxWidth: '40rem',
    height: '35rem',
    position: 'relative'
  },
  list: {
    width: '60%',
    marginBottom: '4rem'
  },
  listItem: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    alignItems: 'center',
    '& > span': {
      fontSize: '1.6rem',
      lineHeight: '2rem',
    },
    '& > p': {
      fontSize: '1.4rem',
      lineHeight: '2rem',
      minWidth: '18rem'
    }
  },
  backLink: {
    fontSize: '1.6rem',
    lineHeight: '2rem',
    fontWeight: 600,
    textDecoration: 'none',
    color: '#000',
    marginTop: '1rem',
    display: 'block'
  },
  subtitle: {
    marginBottom: '2rem'
  },
  rate: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem'
  }
}));

const isMovieDetailsExist = (data: MovieDetails | {}): data is MovieDetails =>
    Object.keys(data).length !== 0;

export const MovieDetailsComponent = () => {
  const params: ParamsData = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();
  const movieDetailsData = useSelector(getMovieDetails);
  const loading = useSelector(getLoader);
  const ratingErrorMessage = useSelector(getRatingErrorMessage);
  const ratingLodar = useSelector(getRatingLoader);
  
  useEffect(() => {
    dispatch(fetchMovieDetailsRequest({ id: params.id }));
  }, [params]);
    
  if (!isMovieDetailsExist(movieDetailsData)) {
    return null;
  }

  const getObjectEntries = Object.entries(movieDetailsData).map(el => ({ key: el[0], value: el[1] }));

  const { Title, Poster } = movieDetailsData;

  return (
    <Container maxWidth='lg'>
      <Link to='/' className={classes.backLink}>Back</Link>
      <Typography variant='h2' className={classes.title} component='h2' gutterBottom>Movie Details</Typography>
      {(loading || ratingLodar) ? <Loader /> : (!isMovieDetailsExist ?
        <Typography variant='h3' className={classes.title} component='h3' gutterBottom>Movie Details not found</Typography> :
        <Box className={classes.root}>
          <ListItemAvatar className={classes.imageBox}>
            <>
              {ratingErrorMessage && <Alert severity='error'>{ratingErrorMessage}</Alert>}
              <Avatar className={classes.image} alt={`${Title}`} src={Poster}></Avatar>
              <Rate className={classes.rate} item={movieDetailsData} />
            </>
          </ListItemAvatar>
          <Box className={classes.list}>
            <Typography variant='h4' className={classes.subtitle} component='h3' gutterBottom>{Title}</Typography>
            {getObjectEntries.map((item) => (
              <ListItem key={item.key} classes={classes} item={item} />
            ))}
          </Box>
        </Box>)}
    </Container>
  );
};
