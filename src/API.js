import axios from 'axios';

const KEY = 'e3a0c6c42d69ea58a91a9b6b24735154';

export const getTrendingMovies = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`
  );
  if (response.status === 404) {
    throw new Error('Something went wrong, please try again', response.status);
  }
  return response.data;
};

export const getMovieDetails = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}&language=en-US`
  );
  if (response.status === 404) {
    throw new Error('Something went wrong, please try again', response.status);
  }
  return response.data;
};

export const getMovieCredits = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );
  if (response.status === 404) {
    throw new Error('Something went wrong, please try again', response.status);
  }
  return response.data;
};

export const getMovieReviews = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
  if (response.status === 404) {
    throw new Error('Something went wrong, please try again', response.status);
  }
  return response.data;
};

export const SearchMovies = async query => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${KEY}`
  );
  if (response.status === 404) {
    throw new Error('Something went wrong, please try again', response.status);
  }
  return response.data;
};
