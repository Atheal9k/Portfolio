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
    background-color: black;


    
`




const Showcase = () => {

    return (
        <div>
            <Section>
                <ShowcaseCards />
                <ShowcaseCards />
                <ShowcaseCards />
            </Section>
        </div>
        
    )
}

export default Showcase