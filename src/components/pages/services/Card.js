import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #fff;
  width: 30%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 0.25rem;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;

  svg {
    width: 50px;
    height: 30px;
  }
  h3 {
    font-size: 1rem;
    color: black;
  }
`;

const Paragraph = styled.p`
  color: black;
  padding: 0.5rem;
`;
export default function Card({ icon, title, body }) {
  return (
    <Container>
      <Header>
        <div>{icon}</div>
        <h3>{title}</h3>
      </Header>
      <Paragraph>{body}</Paragraph>
    </Container>
  );
}
