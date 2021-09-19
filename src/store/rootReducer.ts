import { combineReducers } from "redux";
import { movieDetailsReducer } from "./movieDetails/reducer";

import { moviesReducer } from "./movies/reducer";
import { ratedMoviesReducer } from "./ratedMovies/reducer";

export const rootReducer = combineReducers({
  movies: moviesReducer,
  movieDetails: movieDetailsReducer,
  ratedMovies: ratedMoviesReducer
});

export type AppState = ReturnType<typeof rootReducer>;
