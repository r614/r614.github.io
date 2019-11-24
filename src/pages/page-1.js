import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Button from "@material-ui/core/Button";
import Fade from 'react-reveal/Fade';


const Container = styled.div`
  background: #16111F;
  height: 100vh;
  verical-align: middle;
`
const Child = styled.div`
  position: absolute;
  top: 30%;
  height: 100px;
  margin-top: -50px;
`
const FirstPage = () => (
  <Layout>
    <Container>
    <SEO title="Home" />
    <Child>
    <Fade bottom>
    <h4> Hi, my name is </h4>
    
    <h1 style = {{size: '90px'}}>Roshan Pawar.</h1>

    <h1 style = {{color: '#FCB2FF', size: '80px', marginBottom: '1.45rem'}}>I build cool software for research and fun</h1>

    <p>I’m a student and software developer in Vancouver, BC <br/>
who loves building efficient, scalable applications and <br />
libraries.
    </p>
    <Button variant="outlined" href="mailto:steradian614@gmail.com" style={{color:'#F988FD', borderColor:'#F988FD', 'margin-left':'139px'}}>
        Ping me
    </Button>
    </Fade>

  </Child>
  </Container>
  </Layout>


)
export default FirstPage
