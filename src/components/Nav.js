import React from 'react';
import { NavLink } from 'react-router-dom';

const style = {
  color: 'tomato',
  fontWeight: 'bold'
};
const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink activeStyle={style} exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={style} to="/about">
            Movie
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={style} to="/protected">
            Premium
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
