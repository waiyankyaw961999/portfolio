import React from "react";
import Card from "./Card";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import TimeLine from "./Timeline";
import "./services.css";
const fadein = keyframes`${fadeIn}`;

const contents = [
  {
    icon: (
      <svg
        width="35"
        height="37"
        viewBox="0 0 35 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.13 21.9093C25.27 20.7349 25.375 19.5605 25.375 18.3505C25.375 17.1404 25.27 15.966 25.13 14.7916H31.045C31.325 15.9304 31.5 17.1226 31.5 18.3505C31.5 19.5783 31.325 20.7705 31.045 21.9093H25.13ZM22.0325 31.8029C23.0825 29.8278 23.8875 27.6925 24.4475 25.4682H29.61C27.9145 28.4368 25.2247 30.6855 22.0325 31.8029V31.8029ZM21.595 21.9093H13.405C13.23 20.7349 13.125 19.5605 13.125 18.3505C13.125 17.1404 13.23 15.9482 13.405 14.7916H21.595C21.7525 15.9482 21.875 17.1404 21.875 18.3505C21.875 19.5605 21.7525 20.7349 21.595 21.9093ZM17.5 32.5147C16.0475 30.3794 14.875 28.0128 14.1575 25.4682H20.8425C20.125 28.0128 18.9525 30.3794 17.5 32.5147ZM10.5 11.2327H5.39C7.068 8.25613 9.75589 6.00385 12.95 4.89796C11.9 6.87313 11.1125 9.00845 10.5 11.2327ZM5.39 25.4682H10.5C11.1125 27.6925 11.9 29.8278 12.95 31.8029C9.76259 30.6849 7.07848 28.4358 5.39 25.4682V25.4682ZM3.955 21.9093C3.675 20.7705 3.5 19.5783 3.5 18.3505C3.5 17.1226 3.675 15.9304 3.955 14.7916H9.87C9.73 15.966 9.625 17.1404 9.625 18.3505C9.625 19.5605 9.73 20.7349 9.87 21.9093H3.955ZM17.5 4.1684C18.9525 6.30371 20.125 8.68815 20.8425 11.2327H14.1575C14.875 8.68815 16.0475 6.30371 17.5 4.1684V4.1684ZM29.61 11.2327H24.4475C23.8998 9.02884 23.0888 6.90142 22.0325 4.89796C25.2525 6.019 27.93 8.27888 29.61 11.2327ZM17.5 0.556152C7.8225 0.556152 0 8.56359 0 18.3505C0 23.0698 1.84374 27.5958 5.12563 30.9329C6.75066 32.5853 8.67984 33.896 10.803 34.7903C12.9262 35.6845 15.2019 36.1448 17.5 36.1448C22.1413 36.1448 26.5925 34.27 29.8744 30.9329C33.1563 27.5958 35 23.0698 35 18.3505C35 16.0137 34.5474 13.6998 33.6679 11.5409C32.7884 9.38197 31.4994 7.42034 29.8744 5.76798C28.2493 4.11563 26.3202 2.80491 24.197 1.91066C22.0738 1.01642 19.7981 0.556152 17.5 0.556152V0.556152Z"
          fill="#99AADD"
          fillOpacity="0.7"
        />
      </svg>
    ),
    title: "Web Development",
    body: "For Frontend Development and Backend Development using HTML, CSS and Javascript to build user-friendly web.",
  },
  {
    icon: (
      <svg
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.94444 26.1042C2.41432 26.1042 2.86829 26.2905 3.22241 26.6287C3.57653 26.9668 3.80684 27.4339 3.87074 27.9436L3.88889 28.2332V32.4912C3.88874 33.0306 3.70159 33.5498 3.36526 33.944C3.02892 34.3381 2.56849 34.5778 2.07698 34.6146C1.58547 34.6513 1.09954 34.4825 0.717373 34.1421C0.335208 33.8017 0.0852999 33.3151 0.0181481 32.7807L0 32.4912V28.2332C0 27.6685 0.20486 27.127 0.569514 26.7277C0.934168 26.3285 1.42875 26.1042 1.94444 26.1042V26.1042ZM22.6852 9.07216C23.1551 9.07218 23.609 9.2585 23.9632 9.59665C24.3173 9.93481 24.5476 10.4019 24.6115 10.9116L24.6296 11.2012V32.4912C24.6295 33.0306 24.4423 33.5498 24.106 33.944C23.7697 34.3381 23.3092 34.5778 22.8177 34.6146C22.3262 34.6513 21.8403 34.4825 21.4581 34.1421C21.0759 33.8017 20.826 33.3151 20.7589 32.7807L20.7407 32.4912V11.2012C20.7407 10.6365 20.9456 10.095 21.3103 9.69573C21.6749 9.29647 22.1695 9.07216 22.6852 9.07216ZM33.0556 0.556152C33.5254 0.556174 33.9794 0.742489 34.3335 1.08064C34.6876 1.4188 34.9179 1.88592 34.9819 2.39561L35 2.68515V32.4912C34.9998 33.0306 34.8127 33.5498 34.4764 33.944C34.14 34.3381 33.6796 34.5778 33.1881 34.6146C32.6966 34.6513 32.2106 34.4825 31.8285 34.1421C31.4463 33.8017 31.1964 33.3151 31.1293 32.7807L31.1111 32.4912V2.68515C31.1111 2.12051 31.316 1.57899 31.6806 1.17972C32.0453 0.780458 32.5399 0.556152 33.0556 0.556152V0.556152ZM12.3148 17.5882C12.7847 17.5882 13.2387 17.7745 13.5928 18.1127C13.9469 18.4508 14.1772 18.9179 14.2411 19.4276L14.2593 19.7172V32.4883C14.2591 33.0278 14.072 33.547 13.7356 33.9412C13.3993 34.3353 12.9389 34.575 12.4473 34.6117C11.9558 34.6485 11.4699 34.4796 11.0877 34.1392C10.7056 33.7988 10.4557 33.3123 10.3885 32.7779L10.3704 32.4855V19.7172C10.3704 19.1525 10.5752 18.611 10.9399 18.2117C11.3045 17.8125 11.7991 17.5882 12.3148 17.5882V17.5882Z"
          fill="#99AADD"
          fillOpacity="0.7"
        />
      </svg>
    ),
    title: "Data Annotations",
    body: "Labeling and annotating multi-classes image for training machine learning models.",
  },
];

const Container = styled.div`
  margin-top: 8rem;
  display: flex;
  height: auto;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media (min-width: 1200px) {
    height: 80vh;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: start;
    margin: 0 8rem;
  }
`;

const Left = styled.div`
  flex: 1;
  animation: 1s ${fadein};
  @media (max-width:1200px) {
  padding:3rem 0;
`;

const Right = styled.div`
  flex: 1;
  background-color: #1f2847;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  height: 100vh;
`;

export default function Services() {
  return (
    <>
      <Left>
        <Container>
          {contents.map((content, i) => {
            return <Card key={i} {...content} />;
          })}
        </Container>
      </Left>
      <Right>
        <TimeLine />
      </Right>
    </>
  );
}