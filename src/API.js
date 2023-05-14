import axios from 'axios';
import MovieDetails from 'pages/MovieDetails';

const KEY = 'e3a0c6c42d69ea58a91a9b6b24735154';
// const GetTrendingURL = 'https://api.themoviedb.org/3/trending/all/day';

// const PopularURL =
//   'https://api.themoviedb.org/3/trending/all/day?api_key=e3a0c6c42d69ea58a91a9b6b24735154';

// const SearchMovies =
//   'https://api.themoviedb.org/3/search/movie?query=cat&api_key=e3a0c6c42d69ea58a91a9b6b24735154&language=en-US&page=1&include_adult=false';

// const getMovieDetails =
//   'https://api.themoviedb.org/3/movie/{movie_id}?api_key=e3a0c6c42d69ea58a91a9b6b24735154&language=en-US';

// const getMovieCredits =
//   'https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=e3a0c6c42d69ea58a91a9b6b24735154&language=en-US';

// const getMovieReviews =
//   'https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=e3a0c6c42d69ea58a91a9b6b24735154&language=en-US&page=1';

// axios.defaults.baseURL = 'https://pixabay.com/api';

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
