/* eslint-disable react/jsx-no-undef */
import React from "react";
import styled from "styled-components";

import img from "../assets/adaptive-icon.png";

const Navbar = () => {
  return (
    <Nav>
      <NavTitle>Plataforma de Inventário</NavTitle>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #36f;
  top: 0;
  position: fixed;
  height: auto;
  margin: 0 auto;
  background-image: url(${img});
`;

const NavTitle = styled.h1`
  font-size: 1.8rem;
  color: #fff;
`;
