import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
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
