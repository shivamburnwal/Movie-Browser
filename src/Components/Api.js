const apiKey = process.env.REACT_APP_TMDB_API_KEY;
// const accessToken = process.env.REACT_APP_TMDB_READ_ACCESS_TOKEN;

const SearchMoviesApi = (searchText) => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&api_key=${apiKey}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
};

export const MovieDetailsApi = (id) => {
  return fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${apiKey}`).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
};

export default SearchMoviesApi;