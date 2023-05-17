import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../API';
import { Loader } from './Loader';

export const ERROR_MSG = 'Something went wrong, please try again';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieCredits() {
      try {
        setLoading(true);
        setError(null);
        const movieCredits = await API.getMovieCredits(movieId);
        console.log(movieCredits.cast);

        setMovieCast(movieCredits.cast);
      } catch (error) {
        setError(ERROR_MSG);
      } finally {
        setLoading(false);
      }
    }
    getMovieCredits();
  }, [movieId]);

  return (
    <ul>
      {error && <h1>{error} </h1>}
      {loading && <Loader />}

      {movieCast.map(cast => {
        return (
          <li key={cast.cast_id}>
            {cast.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
                alt={cast.name}
              ></img>
            ) : (
              <img
                src={`https://via.placeholder.com/200x300?text=No+Image`}
                alt={cast.name}
                width="200px"
              ></img>
            )}

            <p> {cast.name}</p>
            <p>Character: {cast.character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
