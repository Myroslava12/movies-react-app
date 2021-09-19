import { RootReducer } from '../types';

export const getMovieDetails = (state: RootReducer) => state.movieDetails.movieDetails;
export const getLoader = (state: RootReducer) => state.movieDetails.loading;
export const getErrorMessage = (state: RootReducer) => state.movieDetails.errorMessage;
