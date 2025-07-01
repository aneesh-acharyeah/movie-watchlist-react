import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import MovieControls from './MovieControls';

const MovieCard = ({ movie, type }) => (
  <div className="movie-card">
    <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'} alt={movie.Title} />
    <div className="movie-info">
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <MovieControls movie={movie} type={type} />
    </div>
  </div>
);

export default MovieCard;
