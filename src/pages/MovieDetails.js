import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import * as API from '../API';

export const ERROR_MSG = 'Something went wrong, please try again';

const MovieDetails = () => {
  const [movieDetails, setmovieDetails] = useState([]);
  const [movieGenres, setMovieGenres] = useState([]);

  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        // setLoading(true);
        // setError(null);
        const movieDetails = await API.getMovieDetails(movieId);
        console.log(movieDetails);
        console.log(movieDetails.genres);

        setmovieDetails(movieDetails);
        setMovieGenres(movieDetails.genres);
        // console.log(movies);
      } catch (error) {
        setError(ERROR_MSG);
      }
      // finally {
      //   setLoading(false);
      // }
    }
    getMovieDetails();
  }, []);

  // const genresArr = movieDetails.genres;
  // console.log(genresArr);

  return (
    <div>
      <Link to="/">Go back</Link>
      <h2>
        Additional information for movie{' '}
        {movieDetails.title || movieDetails.name}
      </h2>
      <img
        src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
        alt={movieDetails.title}
      ></img>
      <h2>
        {movieDetails.title || movieDetails.name} ({movieDetails.release_date})
      </h2>
      <p>User Score: {Math.round(movieDetails.vote_average * 10)}%</p>
      <h3>Overview</h3>
      <p>{movieDetails.overview}</p>
      <h3>Genres</h3>
      <p>
        {movieGenres.map(genre => (
          <span key={genre.id}> {genre.name}</span>
        ))}
      </p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default MovieDetails;
