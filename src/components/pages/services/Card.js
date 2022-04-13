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
  width: 95%;
  svg {
    width: 50px;
    height: 30px;
  }
  h3 {
    font-size: 1.4375rem;
    color: #99aadd;
  }
`;

const Paragraph = styled.p`
  color: #3f3d3d;
  padding: 2rem 0;
`;

export default function Card({ icon, title, body }) {
  return (
    <Container>
      <Header>
        <h3>{title}</h3>
        <div>{icon}</div>
      </Header>
      <Paragraph>{body}</Paragraph>
    </Container>
  );
}
