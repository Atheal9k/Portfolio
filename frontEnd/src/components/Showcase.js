import React, { useState } from "react"
import styled from "styled-components"
import ShowcaseCards from "./ShowcaseCards"
import compoundImage from "../resources/compound-finance.webp"
import airPlane from "../resources/plane.jpg"
import travelTrust from "../resources/travel-trust.jpg"
import aave from "../resources/aave.PNG"
import marketTop from "../resources/time-the-top.jpg"
import coinlistClone from "../resources/coinlist-clone.png"
import deriOne from "../resources/optionsProtocol.png"
import { mediaQueries } from "./mediaQueries"

const Section = styled.section`
  width: 100%;
  position: relative;
  background-color: black;

  border-bottom: 1px solid #01fe87;
  //object-fit: contain;
  max-height: 100%;
  overflow-y: hidden;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: black;
`

const H1 = styled.h1`
  margin-top: 3.5rem;
  color: #18df81;
  font-weight: 400;
  border-bottom: 2px solid #18df81;
  padding-bottom: 0;
  ${mediaQueries("md")`
    text-align:center;
    bottom: 50%;
    border-bottom: none;
  `}
`

const Showcase = () => {
  const cardData = [
    {
      title: "Compound Wallet",
      image: compoundImage,
      hoverContent:
        "This wallet interacts with the Compound Finance Protocal by sending Dai To Compound To Mint cDAI. Users with cDAI will be earning interest every block. When they redeem their cDAI back for DAI, users will receive more Dai than their initial balance.",
      website: "https://compound-wallet.vercel.app/",
      github: "https://github.com/Atheal9k/Compound-Wallet",
    },
    {
      title: "Travel Trust Pay",
      image: travelTrust,
      hoverContent:
        "An escrow like service for the Travel industry. Users can deposit Ethereum to receive Flight Tokens - which will give them the right to redeem or refund the tokens anytime within their unique deadlines.",
      website: "https://traveltrustpay.tech/",
      github: "https://github.com/Atheal9k/Travel-Trustpay",
    },
    {
      title: "Flash Loans",
      image: aave,
      hoverContent:
        "Utilizing the AAVE protocol to instantly borrow any amounts of money without collateral and then returning it back to AAVE after a profit.",
      website: "https://www.youtube.com/watch?v=3Nd7EZzbXxo",
      github: "https://github.com/Atheal9k/AaveFlash",
    },
    {
      title: "Time The Top",
      image: marketTop,
      hoverContent:
        "A game where users can try to time the top of the markets and sell their investments.",
      website: "https://time-the-top.vercel.app/",
      github: "https://github.com/Atheal9k/Time-The-Top",
    },
    {
      title: "CoinGecko Clone",
      image: coinlistClone,
      hoverContent: "A clone of a popular cryptocurrency index website.",
      website: "https://coinlist-git-master.atheal9k.vercel.app/",
      github: "https://github.com/Atheal9k/UTU-coingecko-clone",
    },
    {
      title: "Options Aggregator",
      image: deriOne,
      hoverContent: "Aggregates various Option Contracts from Option Protocols",
      website: "https://youtu.be/sHjiRVZK63c",
      github: "https://github.com/DeriOne-Protocol/DeriOne-frontend",
    },
  ]

  return (
    <div id="showcase">
      <Div>
        <H1>Projects Showcase</H1>
      </Div>

      <Section>
        <ShowcaseCards data={cardData} />
      </Section>
    </div>
  )
}

export default Showcase
