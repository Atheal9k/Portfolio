import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const Section = styled.section `
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    position: relative;
    padding: 5% 0% 5% 0%;
    
`

const Div = styled.div `
    
    width: 50%;
`

const Content = styled.div `
    display:flex;
    flex-direction: column;
    align-self: flex-start;
    justify-content: flex-start;
    width: 100%;

`

const ImgDiv = styled.div `
    display: inline-block;
    vertical-align: middle;

`


const StorySection = () => {

    return (
        <div>
            <Section>
                <Div>
                    <Content>
                    <div>
                <h2>Victor's Story</h2>
                     </div>
                <div>
                    <h1>NO EXCUSES</h1>
                </div>
                <div>
                    <p>I was a punk kid. 

I grew up in Hong Kong with enough money supplied by my Dad to always have $100 in my pocket.

I had zero ambition. I was not interested in success. But my parents divorced when I was 14, and everything changed.

My mom and I immigrated to a bad neighborhood in Vancouver and a low-rent, one-room apartment. 

My bed was a sleeping bag. And suddenly, no more money in my pocket! </p>
                </div>
                </Content>
                
                </Div>
                <ImgDiv>
                <img src={'https://image-us.samsung.com/SamsungUS/home/audio/galaxy-buds/MB-04-JustWhatYouWantV4.jpg?$cm-g-fb-full-bleed-img-mobile-jpg$'}/>
                </ImgDiv>
            </Section>
        </div>
        
    )
}

export default StorySection