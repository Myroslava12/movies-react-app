import { AxiosResponse } from "axios";
import { call, put } from "redux-saga/effects";
import { fetchMovieDetails } from "../../api";

import { setRatingSuccess,setRatingError } from "./actions";
import { SetRatingRequestPayload } from "./types";

export function* moviesRatingSaga(action: { payload: SetRatingRequestPayload, type: string }) {
  const { movie, rate } = action.payload;
  
  try {
    const response: AxiosResponse = yield call(fetchMovieDetails, movie.imdbID);

    if (response.data.Response === 'True') {
      yield put(setRatingSuccess({
        movie: { ...response.data, rate },
      }));
    } else {
      yield put(setRatingError({
        error: response.data.Error
      }));
    }
  } catch (err: any) {
    yield put(setRatingError({
      error: err.message
    }));
  };
};
