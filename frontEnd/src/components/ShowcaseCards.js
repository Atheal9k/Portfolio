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
  &:hover {
    opacity: 0.5;

    ${(props) =>
      props.content &&
      css`
        opacity: 1;
        padding-bottom: 50px;
      `}
  }
`;
const DivContentShift = styled.div`
  &:hover {
    padding-bottom: 50px;
  }
`;

const useStyles = makeStyles(() => ({
  card: {
    boxShadow: "none",
    position: "relative",
    minWidth: 450,
    minHeight: "100%",
    borderRadius: 0,

    "&:after": {
      content: '""',
      display: "block",
      position: "absolute",
      width: "100%",
      height: "10%",
      bottom: 0,
      zIndex: 1,
      background: "linear-gradient(to top, #000, rgba(0,0,0,0))",
    },
  },
  content: {
    position: "absolute",
    zIndex: 2,
    bottom: 0,
    width: "100%",
  },
}));

export const ShowcaseCards = ({ images, title, subtitle, caption }) => {
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
          <CardMedia classes={mediaStyles} image={images} />

          <Box py={3} px={2} className={styles.content}>
            <DivCards content>
              <Info useStyles={useGalaxyInfoStyles}>
                <InfoSubtitle>{subtitle}</InfoSubtitle>
                <InfoTitle>{title}</InfoTitle>
                <InfoCaption>{caption}</InfoCaption>
              </Info>
            </DivCards>
          </Box>
        </Card>
      </DivCards>
    </>
  );
};
export default ShowcaseCards;

// const ShowcaseCards = () => {
//     return (
//         <>
//             <DivCards>
//             <article>
//                 <img />
//                 <p>content</p>
//             </article>
//             <article>
//                 <p>content</p>
//             </article>
//             <article>
//                 <p>content</p>
//             </article>
//             <article>
//                 <p>content</p>
//             </article>
//             </DivCards>
//         </>
//     )
// }

// export default ShowcaseCards
