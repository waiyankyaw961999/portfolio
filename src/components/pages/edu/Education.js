import React from "react";
import Card from "./Card";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import TimeLine from "./Timeline";
const fadein = keyframes`${fadeIn}`;

const contents = [
  {
    icon: require("../../../logos/logo_uopeople.png"),
    title: "University of the People",
    subtitle: "Associate's degree, Computer Science",
    datefrom: "Jan 2022",
    dateto: "Present",
    body: "Continuing my formal academic journey with financial aid achievement from the University of the People.",
  },
  {
    icon: require("../../../logos/logo_mtu.png"),
    title: "Mandalay Technological University",
    subtitle: "Bachalor, Mechatronics",
    datefrom: "Jan 2015",
    dateto: "Present",
    body: "Expected to be graudated in 2022, but due to the political unrest and the pandemics, my education was interrupted.",
  },
];

const Container = styled.div`
  margin-top: 8rem;
  display: flex;
  height: auto;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media (min-width: 1200px) {
    height: 80vh;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: start;
    margin: 0 8rem;
  }
`;

const Left = styled.div`
  flex: 1;
  display:flex;
  align-items:center;
  animation: 1s ${fadein};
  @media (max-width:1200px) {
  padding:1rem 0;
`;

const Right = styled.div`
  flex: 1;
  background-color: #1f2847;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  height: 100vh;
`;

export default function Services() {
  return (
    <>
      <Left>
        <Container>
          {contents.map((content, i) => {
            return <Card key={i} {...content} />;
          })}
        </Container>
      </Left>
      <Right>
        <TimeLine />
      </Right>
    </>
  );
}
