import React from "react";

import Button from "../../button/Button";

import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const fadein = keyframes`${fadeIn}`;

const Left = styled.div`
  flex: 1;
  animation: 1s ${fadein};
  @media (max-width: 1200px) {
    padding: 3rem 0;
  }
`;

const Right = styled.div`
  flex: 1;
  background-color: #1f2847;
  display: flex;
  justify-content: center;

  @media (max-width: 1200px) {
    padding: 3rem 0;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  @media (min-width: 1200px) {
    font-size: 4rem;
  }
  width: 80%;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Subtitle = styled.p`
  text-align: justify;
  letter-spacing: 2px;
  width: 80%;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
`;

const Form = styled.form`
  width: 80%;
`;
const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  input {
    width: 48%;
  }
`;

const Input = styled.input`
  padding: 0.25rem 0.5rem;
  margin-bottom: 1.25rem;
  height: 3rem;
`;

const Textarea = styled.textarea`
  padding: 0.25rem 0.5rem;
  width: 100%;
  height: 10rem;
  resize: none;
`;

const Iframe = styled.iframe`
  height: 100vh;
  width: 100%;
  border: none;
  @media (max-width: 1200px) {
    width: 90%;
    height: 80vh;
  }
`;
export default function Contact() {
  return (
    <>
      <Left>
        <FormWrapper>
          <Body>
            <Title>Contact</Title>
            <Subtitle>
              Interested to working freelance projects, developing apps. If you
              have any question to ask me, feel free to send an email.
            </Subtitle>
            <Form
              method="POST"
              action="https://formspree.io/f/xrgjykwp"
              enctype="multipart/form-data"
              name="EmailForm"
            >
              <FormGroup>
                <Input type="text" name="username" placeholder="Name"></Input>
                <Input type="email" name="email" placeholder="Email"></Input>
              </FormGroup>
              <Input
                style={{ width: "100%" }}
                type="text"
                name="subject"
                placeholder="Subject"
              ></Input>
              <Textarea
                type="textfield"
                name="message"
                placeholder="Message"
              ></Textarea>
              <Button name={"Submit"} type="Submit">
                Submit
              </Button>
            </Form>
          </Body>
        </FormWrapper>
      </Left>
      <Right>
        <Iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26602.639576119294!2d96.19517465489578!3d16.81586255874959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc4c031b37ce4b7d8!2zMTbCsDQ4JzU1LjkiTiA5NsKwMTInMzYuMyJF!5e0!3m2!1sen!2sit!4v1636831456625!5m2!1sen!2sit"
          allowFullScreen=""
          loading="lazy"
        ></Iframe>
      </Right>
    </>
  );
}
