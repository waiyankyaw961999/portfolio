import React from "react";
import WordCloud from "../../wordcloud/WordCloud.tsx";
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
  align-items: center;
  justify-content: center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 4.25rem 4.25rem;
  justify-content: center;
  animation: 1s ${fadein};
  @media (max-width: 1200px) {
    padding: 4.25rem 2.25rem;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 2.25rem;
  width: 100%;
  @media (max-width: 1200px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.p`
  letter-spacing: 2px;
  margin-bottom: 1.5rem;
  font-size: 1.25rem;

  &:last-child {
    margin-bottom: 0;
  }
  @media (max-width: 1200px) {
    text-align: left;
    font-size: 1.25rem;
  }
`;
export default function AboutMe({ windowWidth }) {
  return (
    <>
      <Left>
        <Header>
          <Title fs={windowWidth < 1200 ? true : false}>
            Self Introduction
          </Title>
          <Subtitle>
            I'm a software developer with over two years of experience in
            software development. Highly motivated and eager to learn and
            collaborate with teams.
          </Subtitle>
          <Subtitle>
            I'm flexible, detailed-oriented, self-dependent software developer
            with strong personalities and communications.
          </Subtitle>
        </Header>
      </Left>
      <Right>
        <WordCloud />
      </Right>
    </>
  );
}
