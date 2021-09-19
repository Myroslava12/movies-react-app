import { MovieDetailsState } from "./movieDetails/types";
import { MoviesState } from "./movies/types";
import { RatedMoviesState } from "./ratedMovies/types";

export interface RootReducer {
    movies: MoviesState;
    movieDetails: MovieDetailsState;
    ratedMovies: RatedMoviesState;
}
