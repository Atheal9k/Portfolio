import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const HeaderSection = styled.header`
    
`
const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: ClientRect;
    background-color: #333;
    color: #fff;
    opacity: 0.8;
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0px;
    padding: 0 30px;

    



`

const StyledLink = styled(Link)`
    padding: 10px 20px;
    margin 0 5px;
 

    &:hover{
        color: green;
    }

`
const Ul = styled.ul `
    display:flex;

`

const H1 = styled.h1 `
    font-weight: 300;
    line-height: 1.2;
`




const Header = () => {
    return (
        <React.Fragment>
            <HeaderSection>
                <Div>
                    <H1>Victor Huang</H1>
                    <nav>
                        <Ul>
                            <li><StyledLink to="#">Project Showcase</StyledLink></li>
                            <li><StyledLink to="#">My Story</StyledLink></li>
                            <li><StyledLink to="#">Contact Me</StyledLink></li>
                        </Ul>
                    </nav>
                </Div>

                <div>
                    <h1>Victor</h1>
                    <p>Huang</p>
                </div>
            </HeaderSection>
        </React.Fragment>
    )
}

export default Header;