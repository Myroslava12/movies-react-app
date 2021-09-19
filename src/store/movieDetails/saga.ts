import { AxiosResponse } from "axios";
import { call, put } from "redux-saga/effects";
import { fetchMovieDetails } from "../../api";

import { fetchMovieDetailsFailure, fetchMovieDetailsSuccess } from "./actions";
import { FetchMovieDetailsRequestPayload } from "./types";

export function* fetchMovieDetailsSaga(action: {  payload: FetchMovieDetailsRequestPayload, type: string }) {

  try {
    const response: AxiosResponse = yield call(fetchMovieDetails, action.payload.id);

    if (response.data.Response === 'True') {
      yield put(fetchMovieDetailsSuccess({
        movieDetails: response.data,
      }));
    } else {
      yield put(fetchMovieDetailsFailure({
        error: response.data.Error
      }));
    }
  } catch (err: any) {
    yield put(fetchMovieDetailsFailure({
      error: err.message
    }));
  }
}
