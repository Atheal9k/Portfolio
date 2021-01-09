import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  height: 250px;
  background-color: black;
  color: white;
`;
const StyledLink = styled.a`
  margin-right: 30px;

  &:hover {
    color: #18df81;
  }
`;

const FooterSection = () => {
  return (
    <div id="footer">
      <Section>
        <div>
          <h4>Contact Information</h4>
          <ul>
            <li>v.huang435.@gmail.com</li>
         
          </ul>
        </div>
        <div>
          <StyledLink
            href="https://www.linkedin.com/in/victor-huang-80b933188/"
            target="_blank"
          >
            <i class="fab fa-linkedin"></i>
          </StyledLink>
          <StyledLink href="https://github.com/Atheal9k/" target="_blank">
            <i class="fab fa-github"></i>
          </StyledLink>
        </div>
        <p>Copyright &copy; 2021 - Victor Huang</p>
      </Section>
    </div>
  );
};

export default FooterSection;
