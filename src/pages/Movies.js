import React, { useEffect, useState } from 'react';

import * as API from '../API';
import { useSearchParams } from 'react-router-dom';

export const ERROR_MSG = 'Something went wrong, please try again';

const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);

  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (searchQuery === '') return;

    async function SearchMovies() {
      try {
        // setLoading(true);
        // setError(null);
        const searchedMovies = await API.SearchMovies(searchQuery);
        console.log(searchedMovies);

        setSearchedMovies(searchedMovies);
      } catch (error) {
        setError(ERROR_MSG);
      }
      // finally {
      //   setLoading(false);
      // }
    }
    SearchMovies();
  }, [searchQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form);
    setSearchParams({ searchQuery: form.elements.searchQuery.value });
    form.reset();
  };

  const updateQuerySrting = e => {
    const searchQueryValue = e.target.value;
    console.log(searchQueryValue);
    if (searchQueryValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ searchQuery: searchQueryValue });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchQuery"
          onChange={updateQuerySrting}
        ></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Movies;
