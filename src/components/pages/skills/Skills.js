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
  background-color: #1f2847;
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: ${({ fs }) => (fs ? "0 4.25rem" : "0 2.25rem")};
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: ${({ fs }) => (fs ? "3rem" : "4rem")};
  margin-bottom: 2.25rem;
  width: 100%;
`;

const Subtitle = styled.p`
  font-size: ${({ fs }) => (fs ? "0.3rem" : "1.25rem")};
  text-align: justify;
  letter-spacing: 2px;
  margin-bottom: 1.5rem;

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
`;
const ProgressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 86%;
  height: ${(windowWidth) => (windowWidth < 1200 ? "80vh" : "100vh")};
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
            With over a year expereience in software developement and
            engineering, I have done some personal projects to tailor my web
            development expertise.
          </Subtitle>
          <Subtitle>
            I also have foundation in data science, data analytics and
            statistics AI with Python and other digital analytic tools such as
            Tableau and PowerBI.
          </Subtitle>
          <Subtitle>
            As I am trying to become a full-stack developer, my main foucs on
            backend is Python/Django, and NextJs/ReactJs for frontend. I am also
            learning NodeJs and ExpressJs in my free time.
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
