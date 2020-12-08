import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const HeaderSection = styled.header`
    
`
const Div = styled.div`
    &.navbar{
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

    .li &{
        text-decoration: none;
        text-color: black;
    }

}
`

const Ul = styled.ul `
    list-style: none;
`





const Header = () => {
    return (
        <React.Fragment>
            <HeaderSection className="hero">
                <Div id="navbar" className="navbar">
                    <h1>Victor Huang</h1>
                    <nav>
                        <ul>
                            <li><Link to="#">Project Showcase</Link></li>
                            <li><Link to="#">My Story</Link></li>
                            <li><Link to="#">Contact Me</Link></li>
                        </ul>
                    </nav>
                </Div>

                <div class="content">
                    <h1>Victor</h1>
                    <p>Huang</p>
                </div>
            </HeaderSection>
        </React.Fragment>
    )
}

export default Header;