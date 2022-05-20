import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SocialButtons from "../socials/SocialButtons";

const Panel = styled.div`
  position: absolute;
  width: 100%;
  justify-content: center;
  display: ${({ open }) => (open ? "flex" : "none")};
`;

const PanelList = styled.ul`
  z-index: 100;
  margin-top: 2rem;
  position: relative;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  visiblity: ${({ open }) => (open ? "visible" : "hidden")};
  opacity: ${({ open }) => (open ? "1" : "0")};
  transition: visibility 5s, opacity 5s ease-in-out;
`;

const PanelItem = styled.li`
  display: flex;
  list-style: none;
  padding: 1.5rem;
  justify-content: center;
  color: #000;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;

const StyledMenu = styled.nav`
  height: 100vh;
  transition: all 0.3s ease-in-out;
`;

export default function Menu({ open, setOpen, setLoading }) {
  return (
    <StyledMenu open={open}>
      <Panel open={open}>
        <PanelList open={open}>
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
            to="/education"
          >
            <PanelItem>Education</PanelItem>
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

          <SocialButtons />
        </PanelList>
      </Panel>
    </StyledMenu>
  );
}
