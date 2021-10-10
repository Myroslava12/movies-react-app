import * as types from "./actionTypes";

export interface MovieDetails {
  Title: string;
  Year: string;
  Type: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Poster: string;
  imdbRating: string;
  BoxOffice: string;
  Production: string;
  Response: string;
  imdbID: string;
}

export interface MovieDetailsState {
    movieDetails: MovieDetails | {};
    loading: boolean;
    errorMessage: string | null;
}

export interface FetchMovieDetailsRequestPayload {
    id: string
}

export interface FetchMovieDetailsSuccessPayload {
    movieDetails: MovieDetails;
}

export interface FetchMovieDetailsFailurePayload {
    error: string;
}

export interface FetchMovieDetailsRequest {
    type: typeof types.GET_MOVIE_DETAILS_REQUEST;
    payload: FetchMovieDetailsRequestPayload;
}

export type FetchMovieDetailsSuccess = {
    type: typeof types.GET_MOVIE_DETAILS_SUCCESS;
    payload: FetchMovieDetailsSuccessPayload;
}

export type FetchMovieDetailsFailure = {
    type: typeof types.GET_MOVIE_DETAILS_ERROR;
    payload: FetchMovieDetailsFailurePayload;
}

export type MovieDetailsActions =
    | FetchMovieDetailsRequest
    | FetchMovieDetailsSuccess
    | FetchMovieDetailsFailure;

