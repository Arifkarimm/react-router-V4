import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="movies/avengers">Avengers</Link>
        </li>
        <li>
          <Link to="movies/venom">Venom</Link>
        </li>
        <li>
          <Link to="movies/transformers">Transformers</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
