import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SocialButtons from "../socials/SocialButtons";
const Panel = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  width: 100%;
  height: 100vh;
  background: #315acc;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const TitleContainer = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  height: 50%;
  background: #091747;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h3`
  font-size: 2.5rem;
  text-align: center;
  font-weight: 900;
  color: #fff;
`;

const SubTitle = styled.span`
  font-size: 0.9rem;
  text-align: center;
  color: #fff;
`;

const PanelList = styled.ul`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PanelItem = styled.li`
  display: flex;
  list-style: none;
  padding: 1.5rem;
  justify-content: center;
  color: white;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background: #167be0;
  }

  transition: all 0.8s ease-out;
`;

const StyledMenu = styled.nav`
  position: absolute;
  z-index: 9;
  width: 100%;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  height: 100vh;
  transition: all 0.3s ease-in-out;
`;

export default function Menu({ open, setOpen, setLoading }) {
  return (
    <StyledMenu open={open}>
      <Panel>
        <TitleContainer>
          <Link
            onClick={(open) => {
              setLoading(window.location.href);
              setOpen(!open);
            }}
            className="navigation_link"
            to="/main"
          >
            <Title>Wai Yan</Title>
          </Link>
          <SubTitle>Full Stack Developer</SubTitle>
          <div style={{ width: "70%" }}>
            <SocialButtons />
          </div>
        </TitleContainer>
        <PanelList>
          <Link
            style={{ width: "100%" }}
            onClick={(open) => {
              setOpen(!open);
              setLoading(window.location.href);
            }}
            className="navigation_link"
            to="/about"
          >
            <PanelItem>About</PanelItem>
          </Link>
          <Link
            style={{ width: "100%" }}
            onClick={(open) => {
              setOpen(!open);
              setLoading(window.location.href);
            }}
            className="navigation_link"
            to="/skills"
          >
            <PanelItem>Skills</PanelItem>
          </Link>
          <Link
            style={{ width: "100%" }}
            onClick={(open) => {
              setOpen(!open);
              setLoading(window.location.href);
            }}
            className="navigation_link"
            to="/services"
          >
            <PanelItem>Services</PanelItem>
          </Link>
          <Link
            style={{ width: "100%" }}
            onClick={(open) => {
              setOpen(!open);
              setLoading(window.location.href);
            }}
            className="navigation_link"
            to="/contact"
          >
            <PanelItem>Contact</PanelItem>
          </Link>
        </PanelList>
      </Panel>
    </StyledMenu>
  );
}
