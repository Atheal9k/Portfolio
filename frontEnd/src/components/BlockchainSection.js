import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const Section = styled.section `
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    position: relative;
    
    
`

const ImgHolder = styled.div `

      display: flex;
      justify-content: center;
      align-content: center;

`



const BlockchainSection = () => {

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

export default BlockchainSection