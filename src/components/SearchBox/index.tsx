import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Button, makeStyles, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { fetchMoviesRequest, changeMovieTitleRequest, changeMovieYearRequest } from '../../store/movies/actions';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    '& > *': {
      marginLeft: '1rem'
    }
  },
  input: {
    height: '5rem',
    width: '20rem'
  }
}));

interface PropsData {
  movieTitle: string;
  setMovieTitle: (value: string) => void;
  movieYear: string;
  setMovieYear: (value: string) => void;
  setPage: (value: number) => void;
}

export const SearchBox = (props: PropsData) => {
  const { movieTitle, setMovieTitle, movieYear, setMovieYear, setPage } = props;
  const dispatch = useDispatch();
  const classes = useStyles();
  const [isError, setIsError] = useState(false);

  const onChangeMovieTitleValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setMovieTitle(value);
  }

  const onChangeYear = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setMovieYear(value);
  }

  const onSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (movieTitle.length === 0) {
        setIsError(true);
        return;
    }

    setIsError(false);
    setPage(1);
    dispatch(fetchMoviesRequest({ movie: movieTitle, year: movieYear, page: 1 }));
    dispatch(changeMovieTitleRequest({ value: movieTitle }));

    if (movieYear.length !== 0) {
      dispatch(changeMovieYearRequest({ value: movieYear }));
    }
  }

  return (
    <form className={classes.root}>
      <TextField
        className={classes.input}
        required
        id='movie-title'
        label='Enter Movie Title'
        type='text'
        value={movieTitle}
        onChange={onChangeMovieTitleValue}
        helperText={isError && 'This field is required'}
        error={isError}
      />
      <TextField
        className={classes.input}
        id='year'
        label='Enter Year'
        type='text'
        value={movieYear}
        onChange={onChangeYear}
      />
      <Button
        variant='contained'
        type='submit'
        color='primary'
        onClick={onSubmit}
      >Search</Button>
    </form>
  );
};
