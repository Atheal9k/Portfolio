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

const Img = styled.img `
      width: 10%;
      padding-left: 20px;
      padding-right: 20px;

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
                    <Img src="/images/ada-logo.png"/>
                    <Img src="/images/emurgo-logo.svg"/>
                    <Img src="/images/hyperledger-logo.svg"/>
                    <Img src="/images/swyftx-logo.webp"/>
                    <Img src="/images/coin-companion.jpg"/>
                    <Img src="/images/eth-logo.png"/>
                </ImgHolder>
        </div>
        
    )
}

export default TransitionSection