import React, { useEffect, useState } from 'react';
import * as API from '../API';
import { Link } from 'react-router-dom';
import { Loader } from 'components/Loader';

export const ERROR_MSG = 'Something went wrong, please try again';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        setLoading(true);
        setError(null);
        const trendingMovies = await API.getTrendingMovies();

        setMovies(trendingMovies.results);
      } catch (error) {
        setError(ERROR_MSG);
      } finally {
        setLoading(false);
      }
    }
    getTrendingMovies();
  }, []);

  return (
    <ul>
      {error && <h1>{error} </h1>}
      {loading && <Loader />}
      {movies &&
        movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link key={movie.id} to={`movies/${movie.id}`}>
                {movie.title || movie.name}
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default Home;
