import { MoviesActions, MoviesState } from './types';
import * as actionTypes from './actionTypes';

const initialState: MoviesState = {
    movies: [],
    loading: false,
    errorMessage: null,
    totalResult: ''
};

export const moviesReducer = (state = initialState, action: MoviesActions) => {
    switch(action.type) {
        case (actionTypes.RECEIVE_MOVIES_REQUEST):
          return { ...state, loading: true, errorMessage: null };
        case (actionTypes.RECEIVE_MOVIES_SUCCESS):
          return { ...state, movies: action.payload.movies.Search, loading: false, errorMessage: null, totalResult: action.payload.movies.totalResults };
        case (actionTypes.RECEIVE_MOVIES_ERROR):
          return { ...state, loading: false, errorMessage: action.payload.error };
        default:
            return state;
    }
};
