import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ShowcaseCards from "./ShowcaseCards";
import compoundImage from "../resources/compound.jpg";
import airPlane from "../resources/plane.jpg";

const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;

  position: relative;
  background-color: black;
  height: 85vh;
  border-bottom: 1px solid #01fe87;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  height: 200px;
  background-color: black;
`;

const H1 = styled.h1`
  margin-top: 3.5rem;
  color: #18df81;
  font-weight: 400;
  letter-spacing: 1.2rem;
  border-bottom: 2px solid #18df81;
  padding-bottom: 0;
`;

const Showcase = () => {
  return (
    <div>
      <Div>
        <H1>Blockchain Projects Showcase</H1>
      </Div>
      <Section>
        <ShowcaseCards
          title={"Compound Wallet"}
          subtitle={"Auto Yielding Interest"}
          caption={"DeFi"}
          images={compoundImage}
          description={"This wallet interacts with the Compound Finance Protocal by sending Dai To Compound To Mint cDAI. Users with cDAI will be earning interest every block. When they redeem their cDAI back for DAI, users will receive more Dai than their initial balance."}
          github={"https://github.com/Atheal9k/Compound-Wallet"}
          website={"https://compound-wallet.vercel.app/"}
        />
        <ShowcaseCards
          title={"PayTrust"}
          subtitle={"Backed By Blockchain"}
          caption={"Escrow"}
          images={airPlane}
          description={"An escrow like service for the Travel industry. Users can deposit Ethereum to receive Flight Tokens - which will give them the right to redeem or refund the tokens anytime within their unique deadlines."}
          github={"https://github.com/Atheal9k/"}
          website={"https://travel-trustpay.vercel.app/"}
        />
        <ShowcaseCards />
      </Section>
    </div>
  );
};

export default Showcase;
