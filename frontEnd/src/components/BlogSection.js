import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import arbitrage from "../resources/arbitrage.jpg";
import goguen from "../resources/goguen.jpg";
import hyperledger from "../resources/hyperledger.jpg";
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

const H1 = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  padding: 1.1rem;
  border-bottom: 2px solid #18df81;
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
    link: "",
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
];

const renderCard = (card, index) => {
  return (
    <SyledCard style={{ width: "18rem" }} key={index}>
      <Card.Img variant="top" src={card.image} />
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
