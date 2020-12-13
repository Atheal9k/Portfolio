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

const ImgHolder = styled.div `

      display: flex;
      justify-content: center;
      align-content: center;

`



const TransitionSection = () => {

    return (
        <div>
            <Section>
                <div>
                <h1>Victor Has Worked With Reputable Blockchain Companies</h1>
                </div>
                
            </Section>

            <ImgHolder>
                    <img src={'https://miro.medium.com/max/852/1*bzYxka5FGrwtip2Gl2lq5w.jpeg'}/>
                </ImgHolder>
        </div>
        
    )
}

export default TransitionSection