import { RootReducer } from "../types";

export const getMovies = (state: RootReducer) => state.movies.movies;
export const getLoader = (state: RootReducer) => state.movies.loading;
export const getErrorMessage = (state: RootReducer) => state.movies.errorMessage;
export const getTotalResult = (state: RootReducer) => state.movies.totalResult;
export const getMovieTitleValue = (state: RootReducer) => state.movies.movieTitleValue;
export const getMovieYearValue = (state: RootReducer) => state.movies.movieYearValue;
