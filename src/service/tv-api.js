const baseUrl = "https://api.themoviedb.org/3/"

const fetchMovieDetail = movieId => {
  return fetch(
    `${baseUrl}movie/${movieId}?api_key=e49360a568715d2ac8c393a5e63da783`,
  ).then(res => res.json())
}

const fetchHome = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=e49360a568715d2ac8c393a5e63da783`,
  ).then(res => res.json())
}

const fetchMovieQuery = searchQuery => {
  return fetch(
    `${baseUrl}search/movie?api_key=e49360a568715d2ac8c393a5e63da783&language=en-US&query=${searchQuery}&page=1&include_adult=false`,
  ).then(res => res.json())
}

const fetchCast = movieIdi => {
  return fetch(
    `${baseUrl}movie/${movieIdi}/credits?api_key=e49360a568715d2ac8c393a5e63da783`,
  ).then(res => res.json())
}

const fetchReview = movieId => {
  return fetch(
    `${baseUrl}movie/${movieId}/reviews?api_key=e49360a568715d2ac8c393a5e63da783&language=en-US&page=1`,
  ).then(res => res.json())
}

export default {
  fetchMovieDetail,
  fetchMovieQuery,
  fetchHome,
  fetchCast,
  fetchReview,
}
