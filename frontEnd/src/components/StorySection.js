import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mediaQueries } from "./mediaQueries";

const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  position: relative;
  padding: 5% 0% 5% 0%;

  ${mediaQueries("lg")`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  `}
`;

const Div = styled.div`
  width: 35%;

  ${mediaQueries("lg")`
  width: 80%;
  `}
  ${mediaQueries("md")`
  width: 70%;
  `}
  ${mediaQueries("sm")`
  width: 90%;
  `}
`;

const Div2 = styled.div`
  font-weight: 500;
  font-size: 1.5rem;
  color: #000;
  line-height: 1.9;

  ${mediaQueries("md")`
  font-size: 1.2rem;
  `}
`;

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

  ${mediaQueries("lg")`

  `}
`;

const Img = styled.img`
  max-height: 100%;
  ${mediaQueries("lg")`
  margin-top: 1.7rem;
  object-fit: contain;
  max-height:30%;
  `}
`;

const H1 = styled.h1`
  font-size: 3.3rem;
  font-weight: 600;
  ${mediaQueries("sm")`
    text-align:center;
  `}
  ${mediaQueries("md")`
    text-align:center;
  `}
`;

const H2 = styled.h2`
  text-transform: uppercase;
  color: #18df81;
  border-bottom: 2px solid #18df81;
  margin-bottom: 1.4rem;
  ${mediaQueries("sm")`
    text-align:center;
  `}
`;

const P = styled.p`
  font-weight: 900;
`;

const Button = styled.button`
  margin-top: 2rem;
  max-width: 200px;
  height: 50px;
  color: #18df81;
  border: 2px solid #18df81;
  background-color: #fff;
  font-weight: 900;

  &:hover {
    transition: 0.2s;
    background-color: #18df81;
    color: #fff;
  }
`;

const StorySection = () => {
  return (
    <div id="story">
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
              <P>I lost money in 2017.</P>

              <p>
                Like many people, that was my first entry into cryptocurrencies.{" "}
              </p>

              <p>
                But since then, I have discovered my passion for this technology
                and decided to specialize in every faucet of this industry.
              </p>

              <p>
                I'm a Full Stack Solidity Developer working to help bring
                exciting innovations to the world!{" "}
              </p>

              <p>
                As a copywriter and a developer I'm also able to develop DApps
                and comminucate clealy the business and economic value of the
                technology for everyone to understand easily.{" "}
              </p>

              <p>
                {" "}
                If you want to have a friendly chat - click the button below and
                schedule a time suitable for you!{" "}
              </p>
            </Div2>
            <Button>
              Book Here <i class="fas fa-chevron-right"></i>
            </Button>
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
