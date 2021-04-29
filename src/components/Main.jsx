/* eslint-disable react/jsx-no-undef */
import React from "react";
import styled from "styled-components";

import img from '../assets/image--014.png'
import img1 from '../assets/image--017.png'

const Main = () => {
  return (
    <CardPrimary>
      <CardTitle>Plataforma de Inventário</CardTitle>
      <Logo>
        <img src={img} alt="SOMEONE"/>
      </Logo>
      <Logo>
        <img src={img1} alt=""/>
      </Logo>
    </CardPrimary>
  );
};

export default Main;

const CardPrimary = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #36f;
  margin: 0 auto;
  height: auto;
  margin-top: 4.8rem;
`;

const CardTitle = styled.h1`
  font-size: 1.8rem;
  color: #fff;
`;

const Logo = styled.div `
  display: flex;
  justify-content: center;
  width: 50%;
  color: #000;
  margin-top: 10rem
  img {
    width: auto;
    max-width: 100%;
    height: auto;
    color: #000;
    
  }
  @media (max-width: 1200px) {
    width: 20%;
  }
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`
