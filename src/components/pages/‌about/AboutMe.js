import React from "react";
import WordCloud from "../../wordcloud/WordCloud";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const fadein = keyframes`${fadeIn}`;

const Left = styled.div`
  flex: 1;
  @media (max-width:1200px) {
  padding:3rem 0;
  
`;

const Right = styled.div`
  flex: 1;
  background-color: #1f2847;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 4.25rem;
  justify-content: center;
  animation: 1s ${fadein};
`;

const Title = styled.h1`
  font-size: ${({ fs }) => (fs ? "3rem" : "4rem")};
  margin-bottom: 2.25rem;
`;
const Subtitle = styled.p`
  text-align: justify;
  letter-spacing: 4px;
  margin-bottom: 1.5rem;
  &:last-child {
    margin-bottom: 0;
  }
  @media (max-width: 1200px) {
    text-align: left;
  }
`;
export default function AboutMe({ windowWidth }) {
  return (
    <>
      <Left>
        <Header>
          <Title fs={windowWidth < 1200 ? true : false}>My, Myself</Title>
          <Subtitle>
            I'm a junior software developer with over a year in software
            development. Highly motivated and passionate to learn and develop
            bussiness applications.
          </Subtitle>
          <Subtitle>
            I'm flexible, detailed-oriented, independent software developer with
            strong personalities and communications.
          </Subtitle>
          <Subtitle>
            Highly motivated and interested in working on ambitious projects
            with positive people.
          </Subtitle>
        </Header>
      </Left>
      <Right>
        <WordCloud />
      </Right>
    </>
  );
}
