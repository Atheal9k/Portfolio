import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ShowcaseCards from './ShowcaseCards';
import compoundImage from '../resources/compound-finance.webp';
import airPlane from '../resources/airplane.jpg';

const Section = styled.section `
    display:flex;
    flex-direction: row;
    justify-content: center;

    position: relative;
    background-color: black;
    height: 85vh

    
`

const Div = styled.div `
display:flex;
justify-content: center;
height: 200px;
background-color: black;

`

const H1 = styled.h1 `
    margin-top: 3.5rem;
    color: #18DF81;
    font-weight: 400;
    letter-spacing: 1.2rem;
    border-bottom: 2px solid #18DF81;
    padding-bottom: 0;
`




const Showcase = () => {

    return (
        <div>
            <Div>
                <H1>
                    Blockchain Projects Showcase
                </H1>
            </Div>
            <Section>
                <ShowcaseCards title={"Compound Wallet"} subtitle={"Auto Yielding Interest"} caption={"DeFi"} images={compoundImage}/>
                <ShowcaseCards title={"PayTrust"} subtitle={"Backed By Blockchain"} caption={"Escrow"} images={airPlane}/>
                <ShowcaseCards />
            </Section>
        </div>
        
    )
}

export default Showcase