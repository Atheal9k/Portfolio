import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const Section = styled.section `
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    position: relative;
    
    clip: rect(0, auto, auto, 0);  
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
       
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
      }

    
`




const TransitionSection = () => {

    return (
        <div>
            <Section>
                <h2>hii</h2>
                <h2>hii</h2>
                <h2>hii</h2>
            </Section>
        </div>
        
    )
}

export default TransitionSection