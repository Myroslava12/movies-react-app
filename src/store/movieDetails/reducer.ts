import * as types from './actionTypes';
import {  MovieDetailsState, MovieDetailsActions } from './types';

const initialState: MovieDetailsState = {
  movieDetails: {},
  loading: false,
  errorMessage: null
}

export const movieDetailsReducer = (state = initialState, action: MovieDetailsActions) => {
  switch (action.type) {
    case (types.GET_MOVIE_DETAILS_REQUEST):
      return { ...state, loading: true, errorMessage: null };
    case (types.GET_MOVIE_DETAILS_SUCCESS):
      return { ...state, loading: false, movieDetails: action.payload.movieDetails };
    case (types.GET_MOVIE_DETAILS_ERROR):
      return { ...state, loading: false, errorMessage: action.payload.error, movieDetails: {} };
    default:
      return state;
  };
}
