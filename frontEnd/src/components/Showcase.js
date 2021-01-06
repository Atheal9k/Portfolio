import React, {useState, useRef} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ShowcaseCards from "./ShowcaseCards";
import compoundImage from "../resources/compound.jpg";
import airPlane from "../resources/plane.jpg";
import aave from "../resources/aave.PNG";


const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;

  position: relative;
  background-color: black;
  height: 85vh;
  border-bottom: 1px solid #01fe87;

  object-fit: contain;
  max-height:100%;
  overflow-y: hidden;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display:none;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: black;
  
`;

const H1 = styled.h1`
  margin-top: 3.5rem;
  color: #18df81;
  font-weight: 400;
  border-bottom: 2px solid #18df81;
  padding-bottom: 0;
`;

const Showcase = () => {

  const carouselRef = useRef(null)
  var scrollAmount = 0;
  var scrollPerClick;

  const scrollLeft = () => {
    carouselRef.scrollLeft();

    if (scrollAmount < 0) {
      scrollAmount = 0
    }
    console.log("Scroll Amount: ", scrollAmount);
  }

  const scrollRight = () => {
    if (scrollAmount <= carouselRef.scrollWidth - carouselRef.clientWidth) {
      carouselRef.scrollTo({
        top: 0,
        left: (scrollAmount += scrollPerClick),
        behavior: "smooth",
      })
    }
    
    console.log("Scroll Amount: ", scrollAmount);
  }


  return (
    <div id="showcase">
      <Div>
        <H1>Blockchain Projects Showcase</H1>
      </Div>
      <Section ref={carouselRef}>
        <ShowcaseCards
          title={"Compound Wallet"}
          subtitle={"Auto Yielding Interest"}
          caption={"DeFi"}
          images={compoundImage}
          description={
            "This wallet interacts with the Compound Finance Protocal by sending Dai To Compound To Mint cDAI. Users with cDAI will be earning interest every block. When they redeem their cDAI back for DAI, users will receive more Dai than their initial balance."
          }
          github={"https://github.com/Atheal9k/Compound-Wallet"}
          website={"https://compound-wallet.vercel.app/"}
        />
        <ShowcaseCards
          title={"Travel Trust Pay"}
          subtitle={"Backed By Blockchain"}
          caption={"Escrow"}
          images={airPlane}
          description={
            "An escrow like service for the Travel industry. Users can deposit Ethereum to receive Flight Tokens - which will give them the right to redeem or refund the tokens anytime within their unique deadlines."
          }
          github={"https://github.com/Atheal9k/Travel-Trustpay"}
          website={"https://travel-trustpay.vercel.app/"}
        />
        <ShowcaseCards
          title={"Flash Loans"}
          subtitle={"No Collateral Loans"}
          caption={"DeFi"}
          images={aave}
          description={
            "Utilizing the AAVE protocol to instantly borrow any amounts of money without collateral and then returning it back to AAVE after a profit."
          }
          github={"https://github.com/Atheal9k/"}
          website={"https://travel-trustpay.vercel.app/"}
        />
      </Section>
    </div>
  );
};

export default Showcase;
