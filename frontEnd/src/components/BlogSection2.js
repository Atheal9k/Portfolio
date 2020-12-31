import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Assessment } from "@material-ui/icons";
import BlogCard from './BlogCard';
import ada from '../resources/ada-logo.png';
import { Card, Button } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
    container: {
      marginTop: 30,
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
    },
  
  }));



const Section = styled.section `
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    position: relative;
    
    
`
const Div = styled.div `
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-content: flex-start;
  
  
`
const DivWrapper = styled.div `
  
  
`

const GridContainer = styled.div `
  
  

`

const gridProp = [
  {xs: '12', sm:'6', md:'4'},
]

const cardInfo = [
  { image: "", title: "aaa", text: ""},
  { image: "", title: "bbb", text: ""},
  { image: "", title: "ccc", text: ""},
  { image: "", title: "ddd", text: ""},
]

const renderCard = (card, index) => {
  return (
    <Card style={{ width: "18rem" }} key={index}>
      <Card.Img variant="top" src={ada} />
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>
          {card.text}
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
  )
}

const BlogSection = () => {
    const classes = useStyles();

    return (
        <DivWrapper>
            <Section> 
                <Div>
                <div>
                <h2>Learn About Cryptocurrency</h2>
                </div>
                <div>
                <h1>Articles Written By Victor</h1>  
                </div>
                </Div>
                
            </Section>
            <GridContainer>
            <Grid container spacing={3} className={classes.container}>
        
        {gridProp.map((grids) => <Grid item xs={grids.xs} sm={grids.sm} md={grids.md}> 
        {cardInfo.map(renderCard)} 
        </Grid> )}

      </Grid>
      </GridContainer>
        </DivWrapper>
        
    )
}

export default BlogSection