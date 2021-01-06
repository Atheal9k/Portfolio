import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import styled, { keyframes } from "styled-components";
import { mediaQueries } from "./mediaQueries";

const textAnimation = keyframes`
   0%,10%,100%
   {
       width:0;
   }
   70%,90%
   {
       width: 100%;
   }


`;

const HeaderSection = styled.header`
  background: url("/images/pattern.jpg") no-repeat center center/cover;
  height: 100vh;
  position: sticky;
  background-attachment: fixed;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
  }

  
`;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: none;
  color: #fff;

  opacity: 0.8;
  width: 100%;
  height: 70px;
  position: relative;
  top: 0px;
  padding: 0 30px;

  ${mediaQueries("md")`
  flex-direction: column;
  `}
  
`;

const StyledLink = styled(Link)`
    padding: 10px 20px;
    margin 0 5px;
 

    &:hover{
        color: #01fe87;
        text-decoration: none;
    }

`;
const Ul = styled.ul`
  display: flex;
`;

const H1 = styled.h1`
  font-weight: 300;
  line-height: 1.2;
  font-size: 1.6rem;
  text-transform: uppercase;
  cursor: pointer;
`;
const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  padding: 0 20px;
  color: #fff;
`;
const HH1 = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    position:absolute;
     
    letter-spacing: 1.6rem;
    font-size: 14vw
    font-weight: 500;
    color: #252839;
    -webkit-text-stroke: 0.3vw #383d52;
    text-transform: uppercase;
    
   &:before {
       content: "Welcome";
       position: absolute;
       top: 0;
       left: 0;
       width: 100%;
       height: 100%;
       color: #01fe87;
       -webkit-text-stroke: 0vw #383d52;
       border-right: 2px solid #01fe87;
       overflow: hidden;
       animation-name: ${textAnimation};
       animation-duration: 6s;
       animation-timing-function: linear;
       animation-iteration-count: infinite;
      
   }

`;


const Header = () => {
  return (
    <React.Fragment>
      <HeaderSection>
        <Div>
          <H1>Victor Huang</H1>
          <nav>
            <Ul>
              <li>
                <StyledLink smooth to="#showcase" >Project Showcase</StyledLink>
              </li>
              <li>
                <StyledLink smooth to="#story">My Story</StyledLink>
              </li>
              <li>
                <StyledLink smooth to="#footer">Contact Me</StyledLink>
              </li>
            </Ul>
          </nav>
        </Div>

        <Div2>
          <HH1>Welcome</HH1>
        </Div2>
      </HeaderSection>
    </React.Fragment>
  );
};

export default Header;
