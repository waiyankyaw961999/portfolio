import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import Humberger from "./components/humberger/Humberger";
import Main from "./components/pages/main/Main";
import Contact from "./components/pages/contact/Contact";
import AboutMe from "./components/pages/‌about/AboutMe";
import Skills from "./components/pages/skills/Skills";
import Menu from "./components/menu/Menu";
import Loading from "./components/loading/Loading";
import Education from "./components/pages/edu/Education";
import ScrollToTop from "./components/scrolltop/ScrollToTop";

import {
  ProfileSVG,
  InfoSVG,
  ServicesSVG,
  ContactSVG,
} from "./components/svg/Svg";

const Box = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  width: 100%;
`;
const Container = styled.div`
overflow:auto;
  display: flex;
  flex-direction: row;
  height: 100%;
  width:100%;  
  background-color:#1F3880;
  color:white;
  @media (max-width:1200px) {
    flex-direction: column;
  
`;
const Panel = styled.div`
  display: flex;
  position: sticky;
  width: 8rem;
  left: 0;
  background-color: #fff;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Pages = styled.div`
  flex: 8;
`;

const PanelList = styled.ul`
  display: flex;
  position: relative;
  width: 100%;
  padding: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const PanelItemWrapper = styled.div`
  width: 100%;
`;

const PanelItem = styled.li`
  display: flex;
  position: relative;
  list-style: none;

  width: 100%;
  padding: 0.875rem;
  justify-content: center;
  color: white;
  font-size: 20px;
  font-weight: 600;

  &:hover {
    background: #faf0e6;
  }

  &:last-child {
    border-bottom: 1px solid #fff;
  }
`;

const TitleContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h3`
  font-size: 2.5rem;
  text-align: center;
  font-weight: 900;
  color: #605e5e;
`;

const SubTitle = styled.span`
  font-size: 2.5rem;
  text-align: center;
  color: #2356ee;
`;

const Display = styled.div`
  display: ${({ windowWidth }) => (windowWidth < 1300 ? "block" : "none")};
`;

function App() {
  const [loading, setLoading] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [offset, setOffset] = useState();

  const [open, setOpen] = useState(false);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const handleScroll = () => {
    setOffset(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const loadData = async () => {
      // Wait for two second
      await new Promise((r) => setTimeout(r, 2000));
      // Toggle loading state
      // setLoading((loading) => !loading);
      setLoading("");
    };
    loadData();
  }, [loading]);

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <BrowserRouter>
      <ScrollToTop>
        <Box>
          <Display windowWidth={windowWidth}>
            <Humberger
              windowWidth={windowWidth}
              offset={offset}
              open={open}
              setOpen={setOpen}
            />
            <Menu
              windowWidth={windowWidth}
              open={open}
              setOpen={setOpen}
              setLoading={setLoading}
            />
          </Display>
          <Panel style={{ display: windowWidth < 1300 ? "none" : "block" }}>
            <PanelList>
              <TitleContainer>
                <Link
                  className="navigation_link"
                  onClick={() => setLoading(window.location.href)}
                  to="/main"
                >
                  <Title>Wai</Title>
                  <SubTitle>Dev</SubTitle>
                </Link>
              </TitleContainer>
              <PanelItemWrapper>
                <PanelItem
                  style={{
                    backgroundColor:
                      window.location.pathname === "/about" && "#2356ee",
                  }}
                >
                  <Link
                    onClick={() => setLoading(window.location.href)}
                    className="navigation_link"
                    to="/about"
                  >
                    <ProfileSVG
                      color={window.location.pathname === "/about" && "#fff"}
                    />
                  </Link>
                </PanelItem>
                <PanelItem
                  style={{
                    backgroundColor:
                      window.location.pathname === "/skills" && "#2356ee",
                  }}
                >
                  <Link
                    onClick={() => setLoading(window.location.href)}
                    className="navigation_link"
                    to="/skills"
                  >
                    <InfoSVG
                      color={window.location.pathname === "/skills" && "#fff"}
                    />
                  </Link>
                </PanelItem>
                <PanelItem
                  style={{
                    backgroundColor:
                      window.location.pathname === "/education" && "#2356ee",
                  }}
                >
                  <Link
                    onClick={() => setLoading(window.location.href)}
                    className="navigation_link"
                    to="/education"
                  >
                    <ServicesSVG
                      color={
                        window.location.pathname === "/education" && "#fff"
                      }
                    />
                  </Link>
                </PanelItem>
                <PanelItem
                  style={{
                    backgroundColor:
                      window.location.pathname === "/contact" && "#2356ee",
                  }}
                >
                  <Link
                    onClick={() => setLoading(window.location.href)}
                    className="navigation_link"
                    to="/contact"
                  >
                    <ContactSVG
                      color={window.location.pathname === "/contact" && "#fff"}
                    />
                  </Link>
                </PanelItem>
              </PanelItemWrapper>
            </PanelList>
          </Panel>

          <Pages>
            <Container>
              <Routes>
                <Route
                  exact
                  path="/"
                  element={<Main windowWidth={windowWidth} />}
                />
                <Route
                  path="/main"
                  element={<Main windowWidth={windowWidth} />}
                />
                <Route
                  path="/about"
                  element={<AboutMe windowWidth={windowWidth} />}
                />
                <Route
                  path="/skills"
                  element={<Skills windowWidth={windowWidth} />}
                />
                <Route
                  path="/contact"
                  element={<Contact windowWidth={windowWidth} />}
                />
                <Route
                  path="/education"
                  element={<Education windowWidth={windowWidth} />}
                />
              </Routes>
            </Container>
          </Pages>
        </Box>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
