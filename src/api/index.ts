import axios from "axios";
import { FetchMoviesRequestPayload, Movies } from "../store/movies/types";

export const fetchMovies = async (payload: FetchMoviesRequestPayload) => {
  const { movie, year, page } = payload;
  
  try {
    const response = await axios.get<Movies>(`https://www.omdbapi.com/?s=${movie}&apikey=${process.env.REACT_APP_KEY}&y=${year}&page=${page}`);
    return response;
  } catch(err: any) {
    throw new Error(err.message);
  }
}

export const fetchMovieDetails = async (id: string) => {

  try {
    const response = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_KEY}`);
    return response;

  } catch(err: any) {
    throw new Error(err.message);
  }
}
