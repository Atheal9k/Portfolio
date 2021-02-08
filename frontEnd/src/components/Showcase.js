import React, { useState } from "react"
import styled from "styled-components"
import ShowcaseCards from "./ShowcaseCards"
import compoundImage from "../resources/compound.jpg"
import airPlane from "../resources/plane.jpg"
import aave from "../resources/aave.PNG"
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
  const [activeSlide, setActiveSlide] = useState(0)

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
      image: airPlane,
      hoverContent:
        "An escrow like service for the Travel industry. Users can deposit Ethereum to receive Flight Tokens - which will give them the right to redeem or refund the tokens anytime within their unique deadlines.",
      website: "https://compound-wallet.vercel.app/",
      github: "https://github.com/Atheal9k/Compound-Wallet",
    },
    {
      title: "Flash Loans",
      image: aave,
      hoverContent:
        "Utilizing the AAVE protocol to instantly borrow any amounts of money without collateral and then returning it back to AAVE after a profit.",
      website: "https://compound-wallet.vercel.app/",
      github: "https://github.com/Atheal9k/Compound-Wallet",
    },
  ]

  return (
    <div id="showcase">
      <Div>
        <H1>Blockchain Projects Showcase</H1>
      </Div>

      <Section>
        <ShowcaseCards data={cardData} />
      </Section>
    </div>
  )
}

export default Showcase
