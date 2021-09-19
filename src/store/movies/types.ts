import {
    RECEIVE_MOVIES_REQUEST,
    RECEIVE_MOVIES_SUCCESS,
    RECEIVE_MOVIES_ERROR
} from "./actionTypes";

export interface Movies {
    Search: Movie[];
    Response: string;
    totalResults: string;
}

export interface Movie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
    Genre?: string;
}

export interface MoviesState {
    loading: boolean;
    movies: Movie[];
    errorMessage: string | null;
    totalResult: string;
}

export interface FetchMoviesRequestPayload {
    movie: string;
    year?: string;
    page?: number;
}

export interface FetchMoviesSuccessPayload {
    movies: Movies;
}

export interface FetchMoviesFailurePayload {
    error: string;
}

export interface FetchMoviesRequest {
    type: typeof RECEIVE_MOVIES_REQUEST;
    payload: FetchMoviesRequestPayload;
}

export type FetchMoviesSuccess = {
    type: typeof RECEIVE_MOVIES_SUCCESS;
    payload: FetchMoviesSuccessPayload;
}

export type FetchMoviesFailure = {
    type: typeof RECEIVE_MOVIES_ERROR;
    payload: FetchMoviesFailurePayload;
}

export type MoviesActions =
    | FetchMoviesRequest
    | FetchMoviesSuccess
    | FetchMoviesFailure;
