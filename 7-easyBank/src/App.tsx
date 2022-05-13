import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import ChooseSection from './components/ChooseSection'
import LatestArticles from './components/LatestArticles'
import Footer from './components/Footer'

function App() {
  return (
    <div className="home">
      <Navigation></Navigation>
      <Hero></Hero>
      <ChooseSection></ChooseSection>
      <LatestArticles></LatestArticles>
      <Footer></Footer>
    </div>
  )
}

export default App
