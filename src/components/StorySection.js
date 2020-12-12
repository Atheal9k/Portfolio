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
    
    width: 35%;
`

const Content = styled.div `
    display:flex;
    flex-direction: column;
    align-self: flex-start;
    justify-content: flex-start;
    width: 100%;
    
    
`

const ImgDiv = styled.div `
    display: flex;
    align-content: flex-end;
    justify-content: center;
    
    margin-left: 60px;
    padding-left: 40px;
    max-height: 1000px;
`

const Img = styled.img `
    max-height: 100%;

`

const H1 = styled.h1 `
    font-size: 3rem;
    font-weight: 600;

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
                    <H1>NO EXCUSES</H1>
                </div>
                <div>
                    <p>I was a punk kid. </p>

<p>I grew up in Hong Kong with enough money supplied by my Dad to always have $100 in my pocket. </p>

<p>I had zero ambition. I was not interested in success. But my parents divorced when I was 14, and everything changed.</p>

<p>My mom and I immigrated to a bad neighborhood in Vancouver and a low-rent, one-room apartment. </p>

<p> My bed was a sleeping bag. And suddenly, no more money in my pocket! </p>
                </div>
                </Content>
                
                </Div>
                <ImgDiv>
                <Img src={'https://image-us.samsung.com/SamsungUS/home/audio/galaxy-buds/MB-04-JustWhatYouWantV4.jpg?$cm-g-fb-full-bleed-img-mobile-jpg$'}/>
                </ImgDiv>
            </Section>
        </div>
        
    )
}

export default StorySection