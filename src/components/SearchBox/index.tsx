import React, { ChangeEvent, useState } from 'react';
import { Button, makeStyles, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { fetchMoviesRequest } from '../../store/movies/actions';

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

export const SearchBox = (props: any) => {
  const { movieTitleValue, setMovieTitleValue, year, setYear, setPage } = props;
  const dispatch = useDispatch();
  const classes = useStyles();
  const [isError, setIsError] = useState(false);

  const onChangeMovieTitleValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setMovieTitleValue(value);
  }

  const onChangeYear = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setYear(value);
  }

  const onSubmit = () => {
    if (movieTitleValue.length === 0) {
        setIsError(true);
        return;
    }

    setIsError(false);
    setPage(1);
    dispatch(fetchMoviesRequest({ movie: movieTitleValue, year, page: 1 }));
  }

  return (
    <form className={classes.root}>
      <TextField
        className={classes.input}
        required
        id='movie-title'
        label='Enter Movie Title'
        type='text'
        value={movieTitleValue}
        onChange={onChangeMovieTitleValue}
        helperText={isError && 'This field is required'}
        error={isError}
      />
      <TextField
        className={classes.input}
        id='year'
        label='Enter Year'
        type='text'
        value={year}
        onChange={onChangeYear}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={onSubmit}
      >Search</Button>
    </form>
  );
};
