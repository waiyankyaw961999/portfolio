import React from "react";
import styled, { keyframes } from "styled-components";
import { slideInLeft } from "react-animations";
import SocialButtons from "../../../components/socials/SocialButtons";
import Typewriter from "typewriter-effect";
const bounceInAnimation = keyframes`${slideInLeft}`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width:100%;
  justify-content: center;
  padding:4.25rem 4.25rem;
  animation: 1s ${bounceInAnimation};
  @media (max-width:1200px) {
  margin-top: 4.25rem;
  padding:0 2rem;
  
`;

const Title = styled.h1`
  font-size: 2rem;
  @media (min-width: 1200px) {
    font-size: 4rem;
  }
`;
const Subtitle = styled.div`
  letter-spacing: 4px;
  position: relative;
  display: flex;
  margin-top: 3rem;
  word-break: break-all;
  white-space: normal;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  @media (min-width: 1200px) {
    font-size: 1.8rem;
  }
`;
const SocialButtonWrapper = styled.div`
  width: 100%;
  @media (min-width: 1200px) {
    width: 15%;
  }
`;
export default function Main() {
  return (
    <Header>
      <Title>
        Hello,
        <br /> My name is Wai
        <span className="wave-emoji" role="img" aria-label="waving hand">
          👋
        </span>
        <br />
        <Typewriter
          options={{
            strings: [
              "A full stack developer.",
              "Passionate software engineer.",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 10,
            cursor: "<",
            delay: 100,
          }}
        />
      </Title>
      <Subtitle>Django/NextJS/ReactJS</Subtitle>
      {/* <Link style={{ width: "10rem" }} to="/contact">
        <Button name="Contact Me" />
      </Link> */}
      <SocialButtonWrapper>
        <SocialButtons />
      </SocialButtonWrapper>
    </Header>
  );
}
