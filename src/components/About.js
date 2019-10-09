import React from 'react';
import { NavLink, useRouteMatch, Route } from 'react-router-dom';
import MovieCat from './MovieCat';

const style = {
  color: 'tomato',
  fontWeight: 'bold'
};

const About = () => {
  const { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Movies Caegory</h2>
      <ul>
        <li>
          <NavLink activeStyle={style} exact to={`${url}/action`}>
            Action Movie
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={style} to={`${url}/thriller`}>
            Thriller Movie
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={style} to={`${url}/horror`}>
            Horrot Movie
          </NavLink>
        </li>
      </ul>
      <Route path={`${path}/:movieId`} component={MovieCat} />
    </div>
  );
};

export default About;
