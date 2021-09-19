import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { useDispatch, useSelector } from 'react-redux';
import { MovieDetails } from '../../store/movieDetails/types';
import { Movie } from '../../store/movies/types';
import { setRatingRequest } from '../../store/ratedMovies/actions';
import { getRatedMovies } from '../../store/ratedMovies/selectors';

const useStyles = makeStyles(() => ({
  root: {
    '& svg': {
      width: '1.6rem',
      height: '1.6rem'
    }
  }
}));

interface RateProps {
  item: Movie | MovieDetails;
  className: any;
}

export const Rate = ({ item, className }: RateProps) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const ratedMovies = useSelector(getRatedMovies);
  const [ratingValue, setRatingValue] = useState(0);

  const onChangeRating = (event: any) => {
    const  { value, attributes } = event.target;

    setRatingValue(parseInt(value));
    if (item.imdbID === attributes.name.nodeValue) {
      dispatch(setRatingRequest({ movie: item, rate: parseInt(value) }));
    }
  }

  useEffect(() => {
    if (ratedMovies.length !== 0) {
      const currentMovie = ratedMovies.filter(el => el.imdbID === item.imdbID);
      if (currentMovie.length !== 0) {
        setRatingValue(currentMovie[0].rate);
      }
    }
  }, [ratedMovies]);

  return <Rating name={item.imdbID} className={`${classes.root} ${className}`} value={ratingValue} onChange={onChangeRating} />;
};
