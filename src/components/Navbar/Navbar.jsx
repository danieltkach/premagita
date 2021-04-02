import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/authors" activeClassName="active-link">
            Autores
          </NavLink>
        </li>
        <li>
          <NavLink to="/songs" activeClassName="active-link">
            Canciones
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
