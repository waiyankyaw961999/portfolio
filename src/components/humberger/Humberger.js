import React from "react";
import styled from "styled-components";

const BurgerWrapper = styled.div`
  position: fixed;
  top: 5%;
  right: 5%;
  z-index: 20;
`;
const Burger = styled.button`
  position: absolute;
  top: 0%;
  right: 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 3rem;
  height: 3rem;
  background: transparent;
  border: 0;
  cursor: pointer;

  div {
    width: 2rem;
    height: 5px;
    background: #000;
    border-radius: 10px;
    transition: all 0.3s linear;
    z-index: 10;
    :first-child {
      transform: ${({ open }) =>
        open ? "translateY(12px) rotate(45deg)" : "rotate(0)"};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
    }

    :nth-child(3) {
      transform: ${({ open }) =>
        open ? "translateY(-12px) rotate(-45deg)" : "rotate(0)"};
    }
  }
`;

const MenuCircle = styled.div`
  z-index: 0;
  width: ${({ open }) => (open ? "200vmax" : "3rem")};
  height: ${({ open }) => (open ? "200vmax" : "3rem")};
  background-color: #0ac2ff;
  border-radius: 50%;
  transition-delay: 0.3s ease-in-out;
  transform: ${({ open }) => open && "translateX(52%) translateY(-55%)"};
  transition: all 0.6s cubic-bezier(0.2, 1, 0.2, 1) 0s,
    all 0၅s cubic-bezier(0.2, 1, 0.2, 1) 0.1s;
`;

export default function Humberger({ windowWidth, open, setOpen }) {
  return (
    <BurgerWrapper>
      <Burger
        style={{ display: windowWidth < 1300 ? "flex" : "none" }}
        open={open}
        onClick={() => setOpen(!open)}
      >
        <div />
        <div />
        <div />
      </Burger>

      <MenuCircle onClick={() => setOpen(!open)} open={open}></MenuCircle>
    </BurgerWrapper>
  );
}
