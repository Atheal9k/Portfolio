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




const StorySection = () => {

    return (
        <div>
            <Section>
                <h1>Victor's Story</h1>
                <p>Suffered through hell and back</p>
                <img src={'https://image-us.samsung.com/SamsungUS/home/audio/galaxy-buds/MB-04-JustWhatYouWantV4.jpg?$cm-g-fb-full-bleed-img-mobile-jpg$'}/>
            </Section>
        </div>
        
    )
}

export default StorySection