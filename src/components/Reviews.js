import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../API';
import { Loader } from './Loader';

export const ERROR_MSG = 'Something went wrong, please try again';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieReviews() {
      try {
        setLoading(true);
        setError(null);
        const movieReviews = await API.getMovieReviews(movieId);
        console.log(movieReviews);

        setReviews(movieReviews.results);
      } catch (error) {
        setError(ERROR_MSG);
      } finally {
        setLoading(false);
      }
    }
    getMovieReviews();
  }, [movieId]);

  return (
    <div>
      {error && <h1>{error} </h1>}
      {loading && <Loader />}
      {reviews.length > 0 ? (
        reviews.map(review => {
          return (
            <li key={review.id}>
              <h4>Author: {review.author}</h4>
              <p>{review.content}</p>
            </li>
          );
        })
      ) : (
        <p>There is no reviews</p>
      )}
    </div>
  );
};

export default Reviews;
