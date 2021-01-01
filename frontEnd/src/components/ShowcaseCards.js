import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
//import GoogleFontLoader from 'react-google-font-loader';
import NoSsr from "@material-ui/core/NoSsr";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import {
  Info,
  InfoCaption,
  InfoSubtitle,
  InfoTitle,
} from "@mui-treasury/components/info";
import { useGalaxyInfoStyles } from "@mui-treasury/styles/info/galaxy";
import { useCoverCardMediaStyles } from "@mui-treasury/styles/cardMedia/cover";

const DivCards = styled.div`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  margin-top: 2rem;
  transition: 0.5;
  &:hover {
    opacity: 1;

    ${(props) =>
      props.content &&
      css`
        opacity: 1;
      `}
  }
`;
const useStyles = makeStyles(() => ({
  card: {
    boxShadow: "none",
    position: "relative",
    minWidth: 450,
    minHeight: "100%",
    borderRadius: 0,
    border: "1px solid #171717",
    
    marginBottom: "1.2rem",

    "&:after": {
      content: '""',
      display: "block",
      position: "absolute",
      width: "100%",
      height: "15%",
      bottom: 0,
      zIndex: 1,
      background: "linear-gradient(to top, #000, rgba(1,254,135,0))",
    },

  },
  content: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    zIndex: 2,
    bottom: "-160px",
    width: "100%",
    height: "100%",
    padding: 20,
    opacity: 0,
    transition: "bottom 0.5s",
    backdropFilter: "blur(0px)",

    "&:hover": {
      backdropFilter: "blur(15px)",
      bottom: 0,
      opacity: 1,
      background: "rgba(0, 0, 0, 0.4)",
    }
  },
}));

const StyledImg = styled(CardMedia)`
  object-fit:cover;

`

const H6 = styled.h6`
  color: #fff;
  line-height: 2rem;

`

const Div2 = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.5rem;

`

const A = styled.a `
  &:hover {
    color: #01fe87;
    text-decoration: none;
  }

`

export const ShowcaseCards = ({ images, title, subtitle, caption, description, github, website }) => {
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: "top" });
  const styles = useStyles();
  return (
    <>
      <NoSsr>
        {/* <GoogleFontLoader
            fonts={[
              { font: 'Spartan', weights: [300] },
              { font: 'Montserrat', weights: [200, 400, 700] },
            ]}
          /> */}
      </NoSsr>
      <DivCards>
        <Card className={styles.card}>
          <StyledImg classes={mediaStyles} image={images} />

          <Box py={3} px={2} className={styles.content}>
            <DivCards content>
              <Info useStyles={useGalaxyInfoStyles}>
                <InfoSubtitle>{subtitle}</InfoSubtitle>
                <InfoTitle>{title}</InfoTitle>
                <InfoCaption>{caption}</InfoCaption>
                <H6>{description}</H6>
                <Div2>
                <A href={github} target="_blank"><i class="fab fa-github fa-2x"></i></A>
                <A href={website} target="_blank"><h3>Link To Site <i class="fas fa-chevron-right"></i></h3></A>
                </Div2>
                
              </Info>
            </DivCards>
          </Box>
        </Card>
      </DivCards>
    </>
  );
};
export default ShowcaseCards;

