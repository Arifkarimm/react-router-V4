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
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={style} to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
