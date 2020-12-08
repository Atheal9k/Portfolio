import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const HeaderSection = styled.header`
    // background: url('/images/diana.jpg') no-repeat center center/cover;
    background-color: black;
    height: 100vh;
    position: relative;
    
`
const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: ClientRect;
    background-color: #333;
    color: #fff;
    opacity: 0.8;
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0px;
    padding: 0 30px;

    



`

const StyledLink = styled(Link)`
    padding: 10px 20px;
    margin 0 5px;
 

    &:hover{
        color: green;
    }

`
const Ul = styled.ul `
    display:flex;

`

const H1 = styled.h1 `
    font-weight: 300;
    line-height: 1.2;
`
const Div2 = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    padding: 0 20px;
    color: #fff;
`
const HH1 = styled.h1 `
    cursor: pointer;
    transition: 0.8s;
    font-size: 5rem;
    letter-spacing: 5px;
    font-weight: 500;
    color: #222;
    &:hover {
        font-size: 7rem;
        color: #fff;
        text-shadow: 0 0 10px #fff;
        0 0 20px #fff;
        0 0 40px #fff;
        0 0 80px #fff;
        0 0 120px #fff;
        0 0 160px #fff;
    }

`


const Header = () => {
    return (
        <React.Fragment>
            <HeaderSection>
                <Div>
                    <H1>Victor Huang</H1>
                    <nav>
                        <Ul>
                            <li><StyledLink to="#">Project Showcase</StyledLink></li>
                            <li><StyledLink to="#">My Story</StyledLink></li>
                            <li><StyledLink to="#">Contact Me</StyledLink></li>
                        </Ul>
                    </nav>
                </Div>

                <Div2>
                    <HH1>Welcome To Victor's Portfolio</HH1>
                    
                </Div2>
            </HeaderSection>
        </React.Fragment>
    )
}

export default Header;