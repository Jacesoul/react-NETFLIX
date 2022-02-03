const API_KEY = "e234c8f082fd3b21c327e654e30ec72d";
const BASE_PATH = "https://api.themoviedb.org/3";

interface IMoive {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
}

export interface IGetMoviesResult {
  dates: {
    maximun: string;
    minimun: string;
  };
  page: number;
  results: IMoive[];
  total_pages: number;
  total_results: number;
}

export function getMovies() {
  return fetch(
    `${BASE_PATH}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=kr`
  ).then((response) => response.json());
}
