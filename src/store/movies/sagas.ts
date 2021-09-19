import { AxiosResponse } from "axios";
import { call, put } from "redux-saga/effects";
import { fetchMovies } from "../../api";

import { fetchMoviesFailure, fetchMoviesSuccess } from "./actions";
import { FetchMoviesRequestPayload } from "./types";

export function* fetchMoviesSaga(action: {  payload: FetchMoviesRequestPayload, type: string }) {

  try {
    const response: AxiosResponse = yield call(fetchMovies, action.payload);

    if (response.data.Response === 'True') {
      yield put(fetchMoviesSuccess({
        movies: response.data,
      }));
    } else {
      yield put(fetchMoviesFailure({
        error: response.data.Error
      }));
    }
  } catch (err: any) {
    yield put(fetchMoviesFailure({ error: err.message }));
  }
}
