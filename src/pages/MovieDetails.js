import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import * as API from '../API';

export const ERROR_MSG = 'Something went wrong, please try again';

const MovieDetails = () => {
  const [movieDetails, setmovieDetails] = useState([]);

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

  return (
    <div>
      <h2>Additional information for {movieId}</h2>
      <img src={movieDetails.poster_path} alt={movieDetails.title}></img>
      <p>
        {movieDetails.title || movieDetails.name} ({movieDetails.release_date})
      </p>
      <p>User Score: {movieDetails.vote_average}%</p>
      <h3>Overview</h3>
      <p>{movieDetails.overview}</p>
      <h3>Genres</h3>
      <p>
        {'movieDetails.genres'}

        {/* {movieDetails.genres} */}
        {/* {movieDetails.genres.map(genre => {
          return <span key={genre.id}>{genre.name}</span>;
        })} */}
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
