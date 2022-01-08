import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Button from "../../button/Button";
import { zoomIn } from "react-animations";

const bounceInAnimation = keyframes`${zoomIn}`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 4.25rem;
  justify-content: center;
  
  animation: 1s ${bounceInAnimation};
  @media (max-width:1200px) {
  margin-top: 2rem;
  
`;

const Title = styled.h1`
  font-size: ${({ fs }) => (fs ? "3rem" : "4rem")};
`;
const Subtitle = styled.p`
  letter-spacing: 4px;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
`;

export default function Main({ windowWidth }) {
  return (
    <Header>
      <Title fs={windowWidth < 1200 ? true : false}>
        Hi,
        <br /> My name is Wai
        <br />
        Junior full stack Web Developer.
      </Title>

      <Subtitle>PHP/Laravel/React Developer</Subtitle>

      <Link style={{ width: "10rem" }} to="/contact">
        <Button name="Contact Me" />
      </Link>
    </Header>
  );
}
