import { MovieDetails } from "../movieDetails/types";
import { Movie } from "../movies/types";
import * as types from "./actionTypes";

export interface RatedMovie extends MovieDetails {
    rate: number;
}

export interface RatedMoviesState {
    ratedMovies: RatedMovie[];
    loading: boolean;
    errorMessage: string | null;
}

export interface SetRatingRequestPayload {
    rate: number;
    movie: Movie | MovieDetails;
}

export interface SetRatingSuccessPayload {
    movie: RatedMovie;
}

export interface SetRatingErrorPayload {
    error: string;
}

export interface SetRatingRequest {
    type: typeof types.SET_RATING_REQUEST;
    payload: SetRatingRequestPayload;
}

export type SetRatingSuccess = {
    type: typeof types.SET_RATING_SUCCESS;
    payload: SetRatingSuccessPayload;
}

export type SetRatingError = {
    type: typeof types.SET_RATING_ERROR;
    payload: SetRatingErrorPayload;
}

export type RatedMoviesActions =
    | SetRatingRequest
    | SetRatingSuccess
    | SetRatingError;
