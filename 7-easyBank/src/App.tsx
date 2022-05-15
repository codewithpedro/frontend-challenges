import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import ChooseSection from './components/ChooseSection'
import LatestArticles from './components/LatestArticles'
import Footer from './components/Footer'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function handleChange() {
    setIsOpen(prevState => !prevState);
  }

  return (
    <div className="home" onClick={() => {if (isOpen) setIsOpen(false)}}>
      <Navigation isOpen={isOpen} handleChange={handleChange}></Navigation>
      <div className={isOpen ? "darken" : ""}>
        <Hero></Hero>
        <ChooseSection></ChooseSection>
        <LatestArticles></LatestArticles>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
