import React, { useEffect, useState } from 'react';

import * as API from '../API';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Loader } from 'components/Loader';

export const ERROR_MSG = 'Something went wrong, please try again';

const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const query = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (query === '' || query === null) return;

    async function SearchMovies() {
      try {
        setLoading(true);
        setError(null);
        const searchedMovies = await API.SearchMovies(query);

        setSearchedMovies(searchedMovies.results);
      } catch (error) {
        setError(ERROR_MSG);
      } finally {
        setLoading(false);
      }
    }
    SearchMovies();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form);
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  const updateQuerySrting = e => {
    const searchQueryValue = e.target.value;

    if (searchQueryValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: searchQueryValue });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" onChange={updateQuerySrting}></input>
        <button type="submit">Search</button>
      </form>
      {error && <h1>{error} </h1>}
      {loading && <Loader />}

      <ul>
        {searchedMovies &&
          searchedMovies.map(movie => {
            return (
              <li key={movie.id}>
                <Link
                  key={movie.id}
                  to={`${movie.id}`}
                  state={{ from: location }}
                >
                  {movie.title || movie.name}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Movies;
