import React from 'react';
import { useParams } from 'react-router-dom';

const MovieCat = () => {
  const { movieId } = useParams();
  return (
    <div>
      <h3>Nested Movie ID: {movieId}</h3>
    </div>
  );
};

export default MovieCat;
