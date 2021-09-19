import * as actionTypes from "./actionTypes"
import * as types from "./types";

export const setRatingRequest = (
  payload: types.SetRatingRequestPayload
): types.SetRatingRequest => ({
  type: actionTypes.SET_RATING_REQUEST,
  payload
});
  
export const setRatingSuccess = (
  payload: types.SetRatingSuccessPayload
): types.SetRatingSuccess => ({
  type: actionTypes.SET_RATING_SUCCESS,
  payload,
});

export const setRatingError = (
  payload: types.SetRatingErrorPayload
): types.SetRatingError => ({
  type: actionTypes.SET_RATING_ERROR,
  payload,
});
