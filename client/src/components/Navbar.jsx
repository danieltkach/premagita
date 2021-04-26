import React, {useContext} from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import useTheme from "./../hooks/useTheme";
import {ThemeContext} from "../context/ThemeContext";

const Navbar = () => {
  const {toggleTheme} = useContext(ThemeContext);
  return (
    <Container>
      <NavLink exact to="/" activeClassName="active-link">
        Inicio
      </NavLink>
      <NavLink to="/authors" activeClassName="active-link">
        Autores
      </NavLink>
      <NavLink to="/songs" activeClassName="active-link">
        Canciones
      </NavLink>
      <NavLink to="/settings" activeClassName="active-link">
        Configuración
      </NavLink>
      <div>
        <input onChange={toggleTheme} type="checkbox" id="color" />
        <label htmlFor="color">Switch</label>
      </div>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10vh;
`;
