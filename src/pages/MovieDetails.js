import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import * as API from '../API';
import { Loader } from 'components/Loader';
import { BackLink, MovieInfoWrap } from './MovieDetails.styled';

export const ERROR_MSG = 'Something went wrong, please try again';

const MovieDetails = () => {
  const location = useLocation();
  // console.log(location);
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const [movieDetails, setmovieDetails] = useState([]);
  const [movieGenres, setMovieGenres] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  const releaseDate = new Date(movieDetails.release_date);
  const releaseYear = isNaN(releaseDate)
    ? 'Unknown'
    : releaseDate.getFullYear();

  useEffect(() => {
    async function getMovieDetails() {
      try {
        setLoading(true);
        setError(null);
        const movieDetails = await API.getMovieDetails(movieId);

        setmovieDetails(movieDetails);
        setMovieGenres(movieDetails.genres);
      } catch (error) {
        setError(ERROR_MSG);
      } finally {
        setLoading(false);
      }
    }
    getMovieDetails();
  }, [movieId]);

  return (
    <div>
      <BackLink to={backLinkLocationRef.current}>Go back</BackLink>

      {error && <h1>{error} </h1>}
      {loading && <Loader />}
      <MovieInfoWrap>
        {movieDetails.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
            alt={movieDetails.title}
          ></img>
        ) : (
          <img
            src={`https://via.placeholder.com/300x400?text=No+Image`}
            alt={movieDetails.title}
          ></img>
        )}
        <div>
          <h2>
            {movieDetails.title || movieDetails.name} ({releaseYear})
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
        </div>
      </MovieInfoWrap>

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
