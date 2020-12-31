import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  position: relative;
  padding: 5% 0% 5% 0%;

`;

const Div = styled.div`
  width: 35%;
`;

const Div2 = styled.div`
    font-weight: 400;
    font-size: 1.5rem;
    color: black;

`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

const ImgDiv = styled.div`
  display: flex;
  align-content: flex-end;
  justify-content: center;

  width: 50%;
  margin-left: 40px;
  max-height: 1000px;
`;

const Img = styled.img`
  max-height: 100%;
`;

const H1 = styled.h1`
  font-size: 3rem;
  font-weight: 600;
`;

const H2 = styled.h2`
text-transform: uppercase;
color: #18DF81;
border-bottom: 2px solid #18DF81;
margin-bottom: 1.4rem;
`

const StorySection = () => {
  return (
    <div>
      <Section>
        <Div>
          <Content>
            <div>
              <H2>Victor's Story</H2>
            </div>
            <div>
              <H1>Obsessed With Blockchain</H1>
            </div>
            <Div2>
              <p><b>I lost money in 2017. </b></p>

              <p>
                Like many people, that was my first entry into cryptocurrencies.{" "}
              </p>

              <p>
                But since then, I have discovered my passion for this technology and decided
                to specilize in every faucet of this industry.
              </p>

              <p>
                I'm a Full Stack Solidity Developer working to help bring exciting innovations
                to the world!{" "}
              </p>

              <p>
                {" "}
                If you want to have a friendly chat - click the button below and schedule
                a time suitable for you! {" "}
              </p>
            </Div2>
          </Content>
        </Div>
        <ImgDiv>
          <Img src="images/sitting.jpg" />
        </ImgDiv>
      </Section>
    </div>
  );
};

export default StorySection;
