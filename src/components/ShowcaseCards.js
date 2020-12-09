import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const DivCards = styled.div `
    display: flex;
    justify-content: space-between;
    flex: 0 1 auto;
    width: 100%;
    height: 80vh;
`

const ShowcaseCards = () => {
    return (
        <>
            <DivCards>
            <article>
                <p>content</p>
            </article>
            <article>
                <p>content</p>
            </article>
            <article>
                <p>content</p>
            </article>
            <article>
                <p>content</p>
            </article>
            </DivCards>
        </>
    )
}

export default ShowcaseCards