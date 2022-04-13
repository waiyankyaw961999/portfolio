import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Button from "../../button/Button";
import { slideInLeft } from "react-animations";

const bounceInAnimation = keyframes`${slideInLeft}`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 4.25rem;
  justify-content: center;
  
  animation: 1s ${bounceInAnimation};
  @media (max-width:1200px) {
  margin-top: 2rem;
  padding:0 3rem;
  
`;

const Title = styled.h1`
  font-size: 2.5rem;
  @media (min-width: 1200px) {
    font-size: 4rem;
  }
`;
const Subtitle = styled.p`
  letter-spacing: 4px;
  margin-top: 3rem;
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  @media (min-width: 1200px) {
    font-size: 2.05rem;
  }
`;

export default function Main() {
  return (
    <Header>
      <Title>
        Hi,
        <br /> My name is Wai
        <br />
        Full stack Web Developer.
      </Title>

      <Subtitle>Django/NextJS/ReactJS/Laravel</Subtitle>

      <Link style={{ width: "10rem" }} to="/contact">
        <Button name="Contact Me" />
      </Link>
    </Header>
  );
}
