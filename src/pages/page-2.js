import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import SEO from "../components/seo"


const Container = styled.div`
  background: #16111F;
  height: 100vh;
  verical-align: middle;
  max-height: 100vh;
`
const Child = styled.div`
  position: relative;
  top: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  @media screen and (max-width: 575px) {
  #main {
    display: block;
  }
}
`
const Parent = styled.div`
  display: flex;
  @media screen and (max-width: 575px) {
  #main {
    display: block;
    }
  }
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  max-height: 2vh;

`
const List = styled.div`
  color: "#F988FD";
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  margin: 0
  maxWidth: 100%;
  maxHeight: 10%;
  @media screen and (max-width: 800px) {
  #main {
    display: block;
  }
}

`
const SecondPage = () => (
  <Layout>
  <Container>
  <Parent>
  <Child>
    <SEO title="About" />
    <h3><span style ={{color: '#F988FD', 'font-size': '1rem', 'font-weight':'normal'}}> 01. </span> <span style ={{color:'white', size:'60px'}}> About Me </span></h3>
    <p style={{maxWidth:'100%'}}> Hey! I’m Roshan, a full-stack developer and engineering undergrad at University of British Columbia. I love to build applications and libraries that improve user experience and workflows. <br/>
    </p>
    <p style={{maxWidth:'100%'}}>
I have worked at the <span style={{color:" #E1A5E3"}} >University of British Columbia </span> and <span style={{color:" #E1A5E3"}}> BC Children's Hospital Research Institute </span>as a Research Assistant, as well as a Software Developer at <span style={{color: "#E1A5E3"}}> UBC Launchpad </span> where I get to work on really interesting projects using industry-standard frameworks for data analysis and development.
 </p>
    <p> Some technologies from my recent projects include: </p>
    <Parent>
    <List>
    <ul classname="test">
      <li> <p> Python </p> </li>
      <li> <p> Javascript </p></li>
      <li> <p> Serverless </p> </li>
    </ul>
    </List>
    <List>
    <ul classname="test">
      <li> <p> React </p> </li>
      <li> <p> NodeJS </p></li>
      <li> <p> Express </p> </li>
    </ul>
    </List>

    <List>
    <ul classname="test">
      <li> <p> MongoDB</p> </li>
      <li> <p> TravisCI </p></li>
      <li> <p> AWS Lambda</p> </li>
    </ul>
    </List>

    </Parent>

  </Child>
  <Child>

  </Child>


  </Parent>

  </Container>
  </Layout>
)

export default SecondPage
