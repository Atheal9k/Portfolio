import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ShowcaseCards from './ShowcaseCards';


const Section = styled.section `
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    position: relative;
    margin: 4rem;
    padding: 2rem;
    text-align: center;
    z-index: 99;
    &:before {
        content: '';
        display: block;
        position: absolute;
        top: -100px;
        left: 0;
        width: 100%;
        height: 100px;
        background-color: white;
        z-index: 99;
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
      }

    
`




const Showcase = () => {

    return (
        <div>
            <Section>
                <ShowcaseCards />
            </Section>
        </div>
        
    )
}

export default Showcase