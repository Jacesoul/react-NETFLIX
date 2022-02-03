const API_KEY = "e234c8f082fd3b21c327e654e30ec72d";
const BASE_PATH = "https://api.themoviedb.org/3";

export function getMovies() {
  return fetch(
    `${BASE_PATH}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=kr`
  ).then((response) => response.json());
}
