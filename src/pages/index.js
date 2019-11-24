import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import FirstPage from "../pages/page-1"
import SecondPage from "../pages/page-2"
import ThirdPage from "../pages/page-3"
import "../styles/global.css"
const IndexPage = () => (
  <div classname = 'global'>
  <FirstPage />
  <SecondPage />
  <ThirdPage />
  </div>
)

export default IndexPage
