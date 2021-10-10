import { MoviesActions, MoviesState } from './types';
import * as actionTypes from './actionTypes';

const initialState: MoviesState = {
    movies: [],
    loading: false,
    errorMessage: null,
    totalResult: '',
    movieTitleValue: '',
    movieYearValue: ''
};

export const moviesReducer = (state = initialState, action: MoviesActions) => {
    switch(action.type) {
        case (actionTypes.RECEIVE_MOVIES_REQUEST):
          return { ...state, loading: true, errorMessage: null };
        case (actionTypes.RECEIVE_MOVIES_SUCCESS):
          return { ...state, movies: action.payload.movies.Search, loading: false, errorMessage: null, totalResult: action.payload.movies.totalResults };
        case (actionTypes.RECEIVE_MOVIES_ERROR):
          return { ...state, loading: false, errorMessage: action.payload.error, movies: [] };
        case (actionTypes.CHANGE_MOVIE_TITLE_SUCCESS):
          return { ...state, movieTitleValue: action.payload.value };
        case (actionTypes.CHANGE_MOVIE_YEAR_SUCCESS):
          return { ...state, movieYearValue: action.payload.value };
        default:
            return state;
    }
};
