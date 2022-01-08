import React from "react";
import styled from "styled-components";

const Burger = styled.button`
  position: absolute;
  background-color: ${({ open }) => (open ? "transparent" : "black")};
  top: 5%;
  right: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 2.8rem;
  height: 2.5rem;
  opacity: 0.7;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  z-index: 10;

  div {
    width: 2.3rem;
    height: 5px;
    background: white;
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export default function Humberger({ windowWidth, open, setOpen }) {
  return (
    <Burger
      style={{ display: windowWidth < 1300 ? "flex" : "none" }}
      open={open}
      onClick={() => setOpen(!open)}
    >
      <div />
      <div />
      <div />
    </Burger>
  );
}
