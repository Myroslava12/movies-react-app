import {
    RECEIVE_MOVIES_REQUEST,
    RECEIVE_MOVIES_SUCCESS,
    RECEIVE_MOVIES_ERROR,
    CHANGE_MOVIE_TITLE_REQUEST,
    CHANGE_MOVIE_YEAR_REQUEST,
    CHANGE_MOVIE_YEAR_SUCCESS,
    CHANGE_MOVIE_TITLE_SUCCESS
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
    movieTitleValue: string;
    movieYearValue: string;
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

export interface ChangeMovieTitlePayload {
    value: string;
}

export type ChangeMovieTitleRequest = {
    type: typeof CHANGE_MOVIE_TITLE_REQUEST,
    payload: ChangeMovieTitlePayload
}

export type ChangeMovieTitleSuccess = {
    type: typeof CHANGE_MOVIE_TITLE_SUCCESS,
    payload: ChangeMovieTitlePayload
}

export interface ChangeMovieYearPayload {
    value: string;
}

export type ChangeMovieYearRequest = {
    type: typeof CHANGE_MOVIE_YEAR_REQUEST,
    payload: ChangeMovieYearPayload
}

export type ChangeMovieYearSuccess = {
    type: typeof CHANGE_MOVIE_YEAR_SUCCESS,
    payload: ChangeMovieYearPayload
}

export type MoviesActions =
    | FetchMoviesRequest
    | FetchMoviesSuccess
    | FetchMoviesFailure
    | ChangeMovieYearRequest
    | ChangeMovieYearSuccess
    | ChangeMovieTitleRequest
    | ChangeMovieTitleSuccess;
