import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #fff;
  width: 75%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 0.25rem;
  margin-bottom: 0.425rem;
  @media (min-width: 1200px) {
    width: 100%;
    margin-bottom: 0;
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Paragraph = styled.p`
  color: #3f3d3d;
  padding: 2rem 0;
`;

const Left = styled.div``;
const Right = styled.div`
  width: 70%;
  color: #3f3d3d;
  h3 {
    font-size: 1rem;
    color: #99aadd;
    @media (min-width: 1200px) {
      font-size: 1.4375rem;
    }
  }
  h4 {
    font-size: 0.8rem;
    @media (min-width: 1200px) {
      font-size: 1rem;
    }
  }
  h5 {
    font-size: 0.6rem;
    @media (min-width: 1200px) {
      font-size: 0.8rem;
    }
  }
  @media (min-width: 1200px) {
    width: 75%;
  }
`;

export default function Card(props) {
  return (
    <Container>
      <Header>
        <Left>
          <img width="60" src={props.icon} alt={props.title} />
        </Left>
        <Right>
          <h3>{props.title}</h3>
          <h4>{props.subtitle}</h4>
          <h5>
            {props.datefrom}-{props.dateto}
          </h5>
        </Right>
      </Header>
      <Paragraph>{props.body}</Paragraph>
    </Container>
  );
}
