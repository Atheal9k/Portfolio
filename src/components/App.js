import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import styled, { createGlobalStyle} from 'styled-components';
import Header from './Header';
import Showcase from './Showcase';


const GlobalStyle = createGlobalStyle `

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

    
`


const App = () => {
    return (
        <div>
            <GlobalStyle />
            <BrowserRouter>
            <Header />
            <Showcase />
            </BrowserRouter>
        </div>
    )
}

export default App;