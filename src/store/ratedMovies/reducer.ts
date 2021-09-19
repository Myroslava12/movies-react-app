import * as actionTypes from './actionTypes';
import { RatedMovie, RatedMoviesActions, RatedMoviesState } from './types';

const initialState: RatedMoviesState = {
  ratedMovies: [],
  loading: false,
  errorMessage: null
};

export const ratedMoviesReducer = (state = initialState, action: RatedMoviesActions) => {
  switch (action.type) {
    case (actionTypes.SET_RATING_REQUEST):
      return { ...state, errorMessage: null, loading: true };
    case (actionTypes.SET_RATING_SUCCESS):
      const { movie } = action.payload;

      if (!state.ratedMovies.find(el => el.imdbID === movie.imdbID)) {
        return { ...state, ratedMovies: [...state.ratedMovies, movie], loading: false };
      }
    
      const updatedRatedMovies = state.ratedMovies.reduce((acc: [] | RatedMovie[], curr): RatedMovie[] => {
        if (curr.imdbID === movie.imdbID) {
          return [...acc, movie];
        }
        return [...acc, curr];
     }, []);
      return { ...state, ratedMovies: updatedRatedMovies, loading: false };
    case (actionTypes.SET_RATING_ERROR):
      return { ...state, errorMessage: action.payload.error, loading: false };
    default:
      return state;
  };
};
