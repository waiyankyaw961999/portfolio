import React from "react";
import { FacebookSVG, GithubSVG, LinkedinSVG, WhatsAppSVG } from "../svg/Svg";

import styled from "styled-components";

const SVGWrapper = styled.div`
  display: flex;
  position: relative;
  margin-top: 2rem;
  width: 100%;
  justify-content: space-between;
`;
const SVGICON = styled.div`
  width: 25px;
  transition: all 0.3s ease-out;
  &:hover {
    transform: translate(0, -5px);
  }
`;
function SocialButton() {
  return (
    <SVGWrapper>
      <SVGICON>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/waiyankyaw961999"
        >
          <GithubSVG />
        </a>
      </SVGICON>
      <SVGICON>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.facebook.com/william.kyaw.5661"
        >
          <FacebookSVG />
        </a>
      </SVGICON>
      <SVGICON>
        <a rel="noreferrer" target="_blank" href="https://wa.me/09980578570">
          <WhatsAppSVG />
        </a>
      </SVGICON>
      <SVGICON>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/wai-yan-k-152b22106/"
        >
          <LinkedinSVG />
        </a>
      </SVGICON>
    </SVGWrapper>
  );
}

export default SocialButton;
