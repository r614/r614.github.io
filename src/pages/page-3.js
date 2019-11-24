import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import VerticalTabs from "../components/tabs"

const Container = styled.div`
  background: #16111F;
  height: 100vh;
  align-items: center;
  justify-content: center;
  padding-top: 10%;
`
const Child = styled.div`
  position: relative;
  top: 30%;
  margin-left: 25%;
  height: 100px;
  margin-top: -10%;
`
const ThirdPage = () => (
  <Layout>
  <SEO title="Work Experience" />
  <Container>
  <h3><span style ={{color: '#F988FD', 'font-size': '1rem', 'font-weight':'normal'}}> 02. </span> <span style ={{color:'white', size:'60px'}}> Work Experience </span></h3>
  <Child>
  <VerticalTabs />
  </Child>
  </Container>
  </Layout>
)
export default ThirdPage;
