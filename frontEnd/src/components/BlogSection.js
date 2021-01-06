import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import arbitrage from "../resources/arbitrage.jpg";
import goguen from "../resources/goguen.jpg";
import hyperledger from "../resources/hyperledger.jpg";
import binance from "../resources/binance.jpg";
import mining from "../resources/mining.jpg";
import hack from "../resources/hack.png";
import privacy from "../resources/bitcoin-privacy.jpg";
import eth2 from "../resources/eth2.png";
import { Card, Button } from "react-bootstrap";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const Div2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  max-width: 75%;
`;

const SyledCard = styled(Card)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 15px;
  margin-right: 15px;
`;

const StyledButton = styled(Button)`
  max-width: 200px;
  height: 50px;
  color: #18df81;
  background-color: #fff;
  font-weight: 900;
  border: none;

  &:hover {
    transition: 0.2s;
    background-color: #fff;
    color: #1fc275;
  }
`;

const StyledImg = styled(Card.Img)`
width: 100%;
height: 18vh;
object-fit: cover;

`

const H1 = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  padding: 1.1rem;
  border-bottom: 2px solid #18df81;
  text-align:center;
`;

const H2 = styled.h2`
  text-align: center;
`;

const cardInfo = [
  {
    image: eth2,
    title: "What Is Ethereum 2.0?",
    text: "The next generation of Eth 2.0 is coming...",
    link: "",
  },
  {
    image: arbitrage,
    title: "Crypto Arbitraging",
    text: "Learn about different methods of Arbitrage and Crazy Flash Loans...",
    link: "https://coincompanion.io/learn/crypto-arbitrage/",
  },
  {
    image: hyperledger,
    title: "Hyperledger's in Crypto",
    text: "Understanding Hyperledger...",
    link:
      "https://www.hyperledger.org/blog/2020/11/24/blockchain-education-the-keys-to-the-door-of-a-new-business-revolution",
  },
  {
    image: goguen,
    title: "The Dawn Of Cardano",
    text: "What to expect as Cardano's Goguen Era rolls out...",
    link:
      "https://emurgo.io/blog/highly-anticipated-goguen-era-release-pushes-cardano-closer-to-completion",
  },
  {
    image: binance,
    title: "Binance Exchange Review",
    text: "An in-depth review on Binance...",
    link:
      "https://coincompanion.io/exchanges/binance-review/",
  },
  {
    image: mining,
    title: "How Long Does It Take To Mine 1 Bitcoin?",
    text: "Understand how Bitcoin mining works and what it looks like in 2020...",
    link:
      "https://coincompanion.io/learn/how-long-does-it-take-to-mine-1-bitcoin/",
  },
  {
    image: hack,
    title: "Is Bitcoin Hackable?",
    text: "Discover what makes the Bitcoin Protocol so resistant to hacks and malicious actors...",
    link:
      "https://emurgo.io/blog/highly-anticipated-goguen-era-release-pushes-cardano-closer-to-completion",
  },
  {
    image: privacy,
    title: "Is Bitcoin Tracable?",
    text: "What really is anonymous on the Bitcoin Network and What Can Be Done To Ensure Your Privacy...",
    link:
      "https://emurgo.io/blog/highly-anticipated-goguen-era-release-pushes-cardano-closer-to-completion",
  },
];

const renderCard = (card, index) => {
  return (
    <SyledCard style={{ width: "18rem" }} key={index} >
      <StyledImg variant="top" src={card.image} />
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>{card.text}</Card.Text>
        <StyledButton variant="primary" href={card.link} target="_blank">
          Read More <i class="fas fa-chevron-right"></i>
        </StyledButton>
      </Card.Body>
    </SyledCard>
  );
};

const BlogSection = () => {
  return (
    <div>
      <StyledContainer>
        <section>
          <div>
            <div>
              <H2>Learn About Cryptocurrency</H2>
            </div>
            <div>
              <H1>Articles Written By Victor</H1>
            </div>
          </div>
        </section>

        <Div2>{cardInfo.map(renderCard)}</Div2>
      </StyledContainer>
    </div>
  );
};

export default BlogSection;
