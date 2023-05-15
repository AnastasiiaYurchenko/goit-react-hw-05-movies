import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../API';

export const ERROR_MSG = 'Something went wrong, please try again';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieCredits() {
      try {
        // setLoading(true);
        // setError(null);
        const movieCredits = await API.getMovieCredits(movieId);
        console.log(movieCredits.cast);

        setMovieCast(movieCredits.cast);
        // console.log(movies);
      } catch (error) {
        setError(ERROR_MSG);
      }
      // finally {
      //   setLoading(false);
      // }
    }
    getMovieCredits();
  }, []);

  return (
    <div>
      Cast
      {movieCast.map(cast => {
        return (
          <li key={cast.cast_id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
              alt={cast.name}
            ></img>
            <p> {cast.name}</p>
            <p>Character: {cast.character}</p>
          </li>
        );
      })}
    </div>
  );
};

export default Cast;
