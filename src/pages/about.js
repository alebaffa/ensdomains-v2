import React from "react"
import "normalize.css"

import Layout from "../components/Layout"
import Navigation from "../components/Navigation"
import GetInvolved from "../components/GetInvolved"
import Footer from "../components/Footer"

import AboutDescription from "../components/About/AboutDescription"
import AboutENS from "../components/About/AboutENS"
import AboutHero from "../components/About/AboutHero"
import Team from "../components/About/Team"

export default function Home() {
  return (
    <Layout>
      <Navigation />
      <AboutENS />
      <Team />
      <AboutDescription />
      <GetInvolved />
      <Footer />
    </Layout>
  )
}
