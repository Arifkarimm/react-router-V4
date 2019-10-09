import React from 'react';
import { Link } from 'react-router-dom';

const Movies = props => {
  return (
    <div>
      <h2>Movies ID: {props.match.params.id}</h2>
      <Link to="/">Back to home</Link>
    </div>
  );
};

export default Movies;
