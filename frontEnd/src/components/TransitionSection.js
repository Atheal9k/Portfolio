import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  position: relative;

  clip: rect(0, auto, auto, 0);
  padding: 2rem;
  text-align: center;
  z-index: 99;
  &:before {
    content: "";
    display: block;
    position: absolute;
    top: -100px;
    left: 0;
    width: 100%;
    height: 100px;
    background-color: white;

    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }
`;

const ImgHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-top: 4.1rem;
  margin-bottom: 1.4rem;
`;

const Img = styled.img`
  width: 13%;
  padding-left: 20px;
  padding-right: 20px;
`;

const Div = styled.div`
  height: 500px;
`;

const TransitionSection = () => {
  return (
    <Div>
      <Section>
        <div>
          <h1>Victor Has Worked With Reputable Blockchain Companies</h1>
        </div>
      </Section>

      <ImgHolder>
        <Img src="/images/cardano-logo.jpg" />
        <Img src="/images/emurgo-logo.svg" />
        <Img src="/images/hyperledger-logo.svg" />
        <Img src="/images/swyftx-logo.png" />
        <Img src="/images/coin-companion.jpg" />
        <Img src="/images/eth-logo.png" />
      </ImgHolder>
    </Div>
  );
};

export default TransitionSection;
