import * as actionTypes from "./actionTypes"
import {
    ChangeMovieTitleRequest,
    ChangeMovieTitlePayload,
    ChangeMovieTitleSuccess,
    ChangeMovieYearRequest,
    ChangeMovieYearPayload,
    ChangeMovieYearSuccess,
    FetchMoviesFailure,
    FetchMoviesFailurePayload,
    FetchMoviesRequest,
    FetchMoviesRequestPayload,
    FetchMoviesSuccess,
    FetchMoviesSuccessPayload
} from "./types";

export const fetchMoviesRequest = (payload: FetchMoviesRequestPayload): FetchMoviesRequest => ({
    type: actionTypes.RECEIVE_MOVIES_REQUEST,
    payload
});
  
export const fetchMoviesSuccess = (
    payload: FetchMoviesSuccessPayload
): FetchMoviesSuccess => ({
    type: actionTypes.RECEIVE_MOVIES_SUCCESS,
    payload,
});
  
export const fetchMoviesFailure = (
    payload: FetchMoviesFailurePayload
): FetchMoviesFailure => ({
    type: actionTypes.RECEIVE_MOVIES_ERROR,
    payload,
});

export const changeMovieTitleRequest = (
    payload: ChangeMovieTitlePayload
): ChangeMovieTitleRequest => ({
    type: actionTypes.CHANGE_MOVIE_TITLE_REQUEST,
    payload,
});

export const changeMovieTitleSuccess = (
    payload: ChangeMovieTitlePayload
): ChangeMovieTitleSuccess => ({
    type: actionTypes.CHANGE_MOVIE_TITLE_SUCCESS,
    payload,
});

export const changeMovieYearRequest = (
    payload: ChangeMovieYearPayload
): ChangeMovieYearRequest => ({
    type: actionTypes.CHANGE_MOVIE_YEAR_REQUEST,
    payload,
});

export const changeMovieYearSuccess = (
    payload: ChangeMovieYearPayload
): ChangeMovieYearSuccess => ({
    type: actionTypes.CHANGE_MOVIE_YEAR_SUCCESS,
    payload,
});
