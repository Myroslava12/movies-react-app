import * as actionTypes from "./actionTypes"
import * as types from "./types";

export const fetchMovieDetailsRequest = (
  payload: types.FetchMovieDetailsRequestPayload
): types.FetchMovieDetailsRequest => ({
  type: actionTypes.GET_MOVIE_DETAILS_REQUEST,
  payload
});
  
export const fetchMovieDetailsSuccess = (
  payload: types.FetchMovieDetailsSuccessPayload
): types.FetchMovieDetailsSuccess => ({
  type: actionTypes.GET_MOVIE_DETAILS_SUCCESS,
  payload,
});
  
export const fetchMovieDetailsFailure = (
  payload: types.FetchMovieDetailsFailurePayload
): types.FetchMovieDetailsFailure => ({
  type: actionTypes.GET_MOVIE_DETAILS_ERROR,
  payload,
});
