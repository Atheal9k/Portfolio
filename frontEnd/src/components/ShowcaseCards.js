import React from "react"
import styled from "styled-components"

const GridContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  div {
    position: relative;
    width: 300px;
    height: 35rem;
    border: 5px double #01fe87;
    margin: 1.2rem;

    div {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-end;
      z-index: 2;
      bottom: -160px;
      width: 100%;
      height: 100%;
      padding: 20;
      opacity: 0;
      transition: bottom 0.5s;
      backdrop-filter: blur(0px);
      color: white;
      padding: 1.2rem;
      padding-top: 4.2rem;
      line-height: 1.8rem;
      font-size: 1.2rem;

      &:hover {
        backdrop-filter: blur(15px);
        bottom: 0;
        opacity: 1;
        background: rgba(0, 0, 0, 0.6);
      }
    }
  }
`

const Links = styled.article`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  width: 100%;
`

const StyledImg = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`

const A = styled.a`
  &:hover {
    color: #01fe87;
    text-decoration: none;
  }
`

export const ShowcaseCards = ({ data }) => {
  return (
    <>
      <GridContainer>
        {data.map((newData) => (
          <div key={newData.title}>
            <StyledImg src={newData.image} />
            <div>
              {newData.hoverContent}
              <Links>
                <A href={newData.github} target="_blank">
                  <i class="fab fa-github fa-2x"></i>
                </A>
                <A href={newData.website} target="_blank">
                  <h4>
                    Link To Site <i class="fas fa-chevron-right"></i>
                  </h4>
                </A>
              </Links>
            </div>
          </div>
        ))}
      </GridContainer>
    </>
  )
}
export default ShowcaseCards
