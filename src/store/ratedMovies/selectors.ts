import { RootReducer } from "../types";

export const getRatedMovies = (state: RootReducer) => state.ratedMovies.ratedMovies;
export const getRatingLoader = (state: RootReducer) => state.ratedMovies.loading;
export const getRatingErrorMessage = (state: RootReducer) => state.ratedMovies.errorMessage;
