import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./Header";
import TransitionSection from "./TransitionSection";
import Showcase from "./Showcase.js";
import StorySection from "./StorySection";
import BlogSection from "./BlogSection";
import FooterSection from "./FooterSection";

const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        
    }

    body {
        font-family: 'Raleway', sans-serif;
        background: #fff;
        color: #333;
        line-height: 1.6;
    }

    ul {
        list-style: none;
    }

    a {
        color: #fff;
        text-decoration: none;
    }

    
`;

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <TransitionSection />
        <Showcase />
        <StorySection />
        <BlogSection />
        <FooterSection />
      </BrowserRouter>
    </div>
  );
};

export default App;
