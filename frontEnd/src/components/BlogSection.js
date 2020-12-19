import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Assessment } from "@material-ui/icons";
import BlogCard from './BlogCard';
import ada from '../resources/ada-logo.png';

const useStyles = makeStyles((theme) => ({
    container: {
      marginTop: 30,
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
    },
  
    card: {},
  }));

  const gridProp = [
    {xs: '12', sm:'6', md:'4'},
    {xs: '12', sm:'6', md:'4'},
    {xs: '12', sm:'6', md:'4'},
    {xs: '12', sm:'6', md:'4'},
    {xs: '12', sm:'6', md:'4'},
    {xs: '12', sm:'6', md:'4'},

  ]

  const cardContent = [
    {titles: 'hello'},
    {titles: 'goodbye'}
  ]

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
        <BlogCard title={cardContent}/> 
        </Grid> )}

      </Grid>
      </GridContainer>
        </DivWrapper>
        
    )
}

export default BlogSection