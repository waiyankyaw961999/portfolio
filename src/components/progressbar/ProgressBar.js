import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Progress = styled.div`
  background-color: #d8d8d8;
  border-radius: 20px;
  position: relative;
  margin: 15px 0;
  height: 3px;
  width: 100%;
`;

const ProgressDone = styled.div`
  background: ${({ color }) => color};
  box-shadow: 0 3px 3px -5px #f2709c, 0 2px 5px #f2709c;
  border-radius: 20px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 0;
  height: 3px;
  opacity: 0;
  transition: 1s ease 0.3s;
`;

const Title = styled.div`
  float: left;
`;
export default function ProgressBar({ title, done, color }) {
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };
    setStyle(newStyle);
  }, 200);

  return (
    <Container>
      <Title>{title}</Title>
      <Progress>
        <ProgressDone color={color} style={style}></ProgressDone>
      </Progress>
    </Container>
  );
}
