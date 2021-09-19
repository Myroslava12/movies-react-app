import * as actionTypes from "./actionTypes"
import {
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
