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
    align-content: center;
    position: relative;
    background-color: black;


    
`




const Showcase = () => {

    return (
        <div>
            <Section>
                <ShowcaseCards title={"Compound Wallet"} subtitle={"Auto Yielding Interest"} caption={"DeFi"} images={compoundImage}/>
                <ShowcaseCards title={"PayTrust"} subtitle={"Backed By Blockchain"} caption={"Escrow"} images={airPlane}/>
                <ShowcaseCards />
            </Section>
        </div>
        
    )
}

export default Showcase