import React from "react";
import ProgressBar from "../../progressbar/ProgressBar";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const fadein = keyframes`${fadeIn}`;

const Left = styled.div`
  flex: 1;
  animation: 1s ${fadein};
   @media (max-width:1200px) {
  padding:3rem 0;
`;

const Right = styled.div`
  flex: 1;
  padding: 4rem 0;
  background-color: #1f2847;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 4.25rem;
  padding: 0 2.25rem;

  @media (min-width: 1200px) {
    padding: 4.25rem;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: ${({ fs }) => (fs ? "3rem" : "4rem")};
  margin-bottom: 2.25rem;
  width: 100%;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  letter-spacing: 2px;
  margin-bottom: 1.5rem;
  text-align: left;

  a {
    text-decoration: none;
    color: yellow;
    opacity: 1;

    &:hover {
      opacity: 0.8;
    }
  }
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 1200px) {
    text-align: justify;
    font-size: 1.2rem;
  }
`;

const ProgressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 86%;
`;

export default function Skills({ windowWidth }) {
  return (
    <>
      <Left>
        <Header>
          <Title fs={windowWidth < 1200 ? true : false}>
            Skills and Experiences
          </Title>
          <Subtitle>
            With over a year experience in software developement and
            engineering, I have done some personal projects to tailor my
            software development expertise.
          </Subtitle>

          <Subtitle>
            Visit my{" "}
            <a href="https://www.linkedin.com/in/wai-yan-k-152b22106/">
              Linkedin
            </a>{" "}
            profile for more details or just contact me.
          </Subtitle>
        </Header>
      </Left>
      <Right>
        <ProgressWrapper>
          <ProgressBar color={"#C9E016"} title={"Frontend"} done={50} />
          <ProgressBar color={"#08FDD8"} title={"NextJs/ReactJs"} done={60} />
          <ProgressBar color={"#DE0477"} title={"Backend"} done={60} />
          <ProgressBar color={"#FF6B6B"} title={"PHP/Laravel"} done={70} />
          <ProgressBar color={"#00FFDD"} title={"Python/Django"} done={70} />
        </ProgressWrapper>
      </Right>
    </>
  );
}
