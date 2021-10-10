import React, { useEffect, useState } from 'react';
import { Box, Container, Divider, List, makeStyles, Typography } from '@material-ui/core';
import { Alert, Pagination } from '@material-ui/lab';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesRequest } from '../../store/movies/actions';
import { getErrorMessage, getLoader, getMovies, getMovieTitleValue, getMovieYearValue, getTotalResult } from '../../store/movies/selectors';
import { getRatingErrorMessage, getRatingLoader } from '../../store/ratedMovies/selectors';
import { Loader } from '../Loader';
import { SearchBox } from '../SearchBox';
import { MovieItem } from './MovieItem';

const useStyles = makeStyles(() => ({
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  title: {
    textAlign: 'center',
    marginTop: '2rem'
  },
  pagination: {
    marginBottom: '2rem',
    paddingTop: '2rem',
    '& ul': {
      justifyContent: 'center'
    }
  }
}));

export const Movies = () => {
  const dispatch = useDispatch();
  const movies = useSelector(getMovies);
  const loading = useSelector(getLoader);
  const ratingLoader = useSelector(getRatingLoader);
  const itemsPerPage: number = 10;
  const classes = useStyles();
  const errorMessage = useSelector(getErrorMessage);
  const totalResult = useSelector(getTotalResult);
  const ratingErrorMessage = useSelector(getRatingErrorMessage);
  const movieTitleValue = useSelector(getMovieTitleValue);
  const moiveYearValue = useSelector(getMovieYearValue);

  const [movieTitle, setMovieTitle] = useState(movieTitleValue);
  const [movieYear, setMovieYear] = useState(moiveYearValue);
  const [page, setPage] = useState(1);
  const [noOfPages, setNoOfPages] = useState(0);

  const handleChange = (_: any, value: number) => {
    setPage(value);
    dispatch(fetchMoviesRequest({ movie: movieTitle, year: movieYear, page: value }));
  };

  useEffect(() => {
    if (movies.length !== 0) {
      const result = Math.ceil(parseInt(totalResult) / itemsPerPage);
      setNoOfPages(result);
    }
  }, [movies]);

  return (
    <Container maxWidth='lg' className='movies-container'>
      <Typography variant='h2' className={classes.title} component='h2' gutterBottom>Movies</Typography>

      <SearchBox
        movieTitle={movieTitle}
        setMovieTitle={setMovieTitle}
        movieYear={movieYear}
        setMovieYear={setMovieYear}
        setPage={setPage}
      />

      {(loading || ratingLoader) && <Loader />}
      {errorMessage && <Alert severity='error'>{errorMessage}</Alert>}
      {ratingErrorMessage && <Alert severity='error'>{ratingErrorMessage}</Alert>}

      {movies.length !== 0 ? <>
        <List className={classes.list}>
          {movies.map((item, i) => {
            return <MovieItem key={`${i}.${item.Title} - ${item.imdbID}`} item={item} />
          })}
        </List>
        <Divider />
        <Box component='div' className={classes.pagination}>
          <Pagination
            count={noOfPages}
            page={page}
            onChange={handleChange}
            defaultPage={1}
            color='primary'
            size='medium'
            showFirstButton
            showLastButton
          />
        </Box>
      </> : null}
    </Container>
  );
};
