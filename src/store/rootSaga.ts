import { all, takeLatest } from "redux-saga/effects";
import { GET_MOVIE_DETAILS_REQUEST } from "./movieDetails/actionTypes";
import { fetchMovieDetailsSaga } from "./movieDetails/saga";
import { RECEIVE_MOVIES_REQUEST } from "./movies/actionTypes";
import { fetchMoviesSaga } from "./movies/sagas";
import { SET_RATING_REQUEST } from "./ratedMovies/actionTypes";
import { moviesRatingSaga } from "./ratedMovies/saga";

export function* rootSaga() {
    yield all([takeLatest(RECEIVE_MOVIES_REQUEST, fetchMoviesSaga),
    takeLatest(GET_MOVIE_DETAILS_REQUEST, fetchMovieDetailsSaga),
    takeLatest(SET_RATING_REQUEST, moviesRatingSaga)]);
};
