import React, { useState, useRef } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import ShowcaseCards from "./ShowcaseCards"
import compoundImage from "../resources/compound.jpg"
import airPlane from "../resources/plane.jpg"
import aave from "../resources/aave.PNG"
import { mediaQueries } from "./mediaQueries"
import Carousel from "react-simply-carousel"
import MediaQuery from "react-responsive"

const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;

  position: relative;
  background-color: black;
  height: 85vh;
  border-bottom: 1px solid #01fe87;

  object-fit: contain;
  max-height: 100%;
  overflow-y: hidden;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  ${mediaQueries("lg")`
  
  `}
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

  return (
    <div id="showcase">
      <Div>
        <H1>Blockchain Projects Showcase</H1>
      </Div>
      <Section>
        <MediaQuery maxWidth={1399}>
          <Carousel
            updateOnItemClick
            containerProps={{
              style: {
                width: "100%",
                justifyContent: "space-between",
              },
            }}
            activeSlideIndex={activeSlide}
            activeSlideProps={{
              style: {
                background: "blue",
              },
            }}
            onRequestChange={setActiveSlide}
            forwardBtnProps={{
              children: ">",
              style: {
                width: 60,
                height: 60,
                minWidth: 60,
                alignSelf: "center",
              },
            }}
            backwardBtnProps={{
              children: "<",
              style: {
                width: 60,
                height: 60,
                minWidth: 60,
                alignSelf: "center",
              },
            }}
            itemsToShow={2}
            speed={400}>
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
              website={"https://traveltrustpay.tech/"}
            />
            <ShowcaseCards
              title={"Flash Loans"}
              cd
              subtitle={"No Collateral Loans"}
              caption={"DeFi"}
              images={aave}
              description={
                "Utilizing the AAVE protocol to instantly borrow any amounts of money without collateral and then returning it back to AAVE after a profit."
              }
              github={"https://github.com/Atheal9k/AaveFlash"}
              website={"https://www.youtube.com/watch?v=3Nd7EZzbXxo"}
            />
          </Carousel>
        </MediaQuery>
        <MediaQuery minWidth={1400}>
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
            website={"https://traveltrustpay.tech/"}
          />
          <ShowcaseCards
            title={"Flash Loans"}
            cd
            subtitle={"No Collateral Loans"}
            caption={"DeFi"}
            images={aave}
            description={
              "Utilizing the AAVE protocol to instantly borrow any amounts of money without collateral and then returning it back to AAVE after a profit."
            }
            github={"https://github.com/Atheal9k/AaveFlash"}
            website={"https://www.youtube.com/watch?v=3Nd7EZzbXxo"}
          />
        </MediaQuery>
      </Section>
    </div>
  )
}

export default Showcase
